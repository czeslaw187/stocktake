import { Client } from "pg";

export async function GET(req) {
    const client = new Client(process.env.DB_URL)
    client.connect()
    try {
        await client.query('DELETE FROM counterhours')
        return new Response(JSON.stringify({message: 'Records deleted'}))
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}))
    } finally {
        client.end()
    }
}