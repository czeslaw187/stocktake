import axios from "axios";
import { Client } from "pg";

export async function POST(req) {
    const data = await req.json()
    const {userId, isIn} = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query("UPDATE counterusers SET isin=$1 WHERE id=$2",[isIn,userId])
        return new Response(JSON.stringify({message: 'Success'}))
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}))
    } finally {
        client.end()
    }
}