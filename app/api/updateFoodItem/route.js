import Client from "pg/lib/client"
import { parse as uuidParse } from "uuid"

export async function POST(req) {
    const request = await req.json()
    const {id, quantity} = request.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('UPDATE counter SET quantity=$1 WHERE id=$2',[quantity, id])//  <<<-------------- CONTINUE
        return new Response(JSON.stringify({message: 'Item updated'}))
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}))
    } finally {
        client.end()
    }
}