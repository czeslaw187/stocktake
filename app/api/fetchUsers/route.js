import Client from "pg/lib/client";

export async function GET(req) {
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT * FROM counterusers')
        return new Response(JSON.stringify(resp.rows))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}