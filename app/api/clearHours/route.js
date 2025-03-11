import { Client } from "pg";

export async function POST(req) {
    const data = await req.json()
    const {userId} = data.obj
    const client = new Client(process.env.DB_URL)
    client.connect()
    try {
        await client.query('DELETE FROM counterhours WHERE userId=$1',[userId])
        await client.query('UPDATE counterusers SET hours=0 WHERE id=$1',[userId])
        return new Response(JSON.stringify({message: 'Records deleted'}))
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}))
    } finally {
        client.end()
    }
}