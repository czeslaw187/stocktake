const Client = require("pg/lib/client")

export async function POST(req) {
    const data = await req.json()
    const id = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('DELETE FROM categories WHERE id=$1',[id])
        return new Response(JSON.stringify({message: 'Category deleted'}))
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}))
    }
}