import { Client } from "pg";

export async function POST(req) {
    const data = await req.json()
    const {workplace} = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let response = await client.query('SELECT * FROM countentry WHERE workplace=$1 ORDER BY date DESC LIMIT 100',[workplace])
        return new Response(JSON.stringify(response.rows))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    }
}