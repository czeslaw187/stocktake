import Client from "pg/lib/client"

export async function POST(req) {
    const item = await req.json()
    const {name, unit, quantity, category, workplace} = item.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('INSERT INTO counter (name, unit, quantity, category, workplace) VALUES ($1,$2,$3,$4,$5)',[name, unit, quantity, category, workplace])
        return new Response(JSON.stringify({message: 'Item Created'}))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    } finally {
        client.end()
    }
}