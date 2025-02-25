import Client from "pg/lib/client"

export async function POST(req) {
    const item = await req.json()
    const {name, unit, qnt, cat} = item.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('INSERT INTO counter (name, unit, quantity, category) VALUES ($1,$2,$3,$4)',[name, unit, qnt, cat])
        return new Response(JSON.stringify(item.obj))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}