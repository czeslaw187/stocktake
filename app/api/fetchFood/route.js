import Client from "pg/lib/client";

export async function GET() {
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        const resp = await client.query('SELECT * FROM counter')
        return new Response(JSON.stringify(resp.rows))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}