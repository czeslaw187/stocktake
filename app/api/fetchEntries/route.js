import { Client } from "pg";

export async function GET(req) {
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let response = await client.query('SELECT * FROM countentry')
        return new Response(JSON.stringify(response.rows))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    }
}