import Client from "pg/lib/client"

export async function POST(req) {
    const request = await req.json()
    const {id} = request.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('DELETE FROM counterusers WHERE id=$1',[id])
        return new Response(JSON.stringify({message: 'User Deleted'}))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    }
}