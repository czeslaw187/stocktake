import Client from "pg/lib/client";

export async function GET(req) {
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        const response = await client.query('SELECT * FROM categories')
        return new Response(JSON.stringify(response.rows))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    } finally {
        client.end()
    }
}