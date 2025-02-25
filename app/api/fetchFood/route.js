import Client from "pg/lib/client";

export async function POST(req) {
    const slug = await req.json()
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        const resp = await client.query('SELECT id,name,unit,quantity,category FROM counter WHERE category=$1',[slug.obj])
        return new Response(JSON.stringify(resp.rows))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}