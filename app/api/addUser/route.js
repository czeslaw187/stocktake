import Client from "pg/lib/client"

export async function POST(req) {
    const request = await req.json()
    const {name, email, password, isadmin, workplace} = request.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('INSERT INTO counterusers (name, email, password, isadmin, hours, workplace) VALUES ($1,$2,$3,$4,0,$5)',[name, email, password, isadmin, workplace])
        return new Response(JSON.stringify({message: 'New User Created'}))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    }
}