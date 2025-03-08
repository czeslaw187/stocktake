import { Client } from "pg"

export async function POST(req) {
    const data = await req.json()
    const {userId} = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT * FROM counterhours WHERE userID=$1 LIMIT 100',[userId])
        return new Response(JSON.stringify(resp.rows))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    } finally {
        client.end()
    }
}