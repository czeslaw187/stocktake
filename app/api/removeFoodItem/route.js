import Client from "pg/lib/client"

export async function POST(req) {
    const {obj} = await req.json()
    const id = obj.id
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('DELETE FROM counter WHERE id=$1',[id])
        return new Response(JSON.stringify({message: 'Item Removed'}))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    }
}