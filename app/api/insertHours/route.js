import { Client } from "pg"

export async function POST(req) {
    const data = await req.json()
    const {userId, hours} = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('UPDATE counterusers SET hours=$1 WHERE id=$2',[hours, userId])
        return new Response(JSON.stringify({message: 'OK'}))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    } finally {
        client.end()
    }
}