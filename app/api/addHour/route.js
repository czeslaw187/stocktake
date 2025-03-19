import { Client } from "pg"

export async function POST(req) {
    const data = await req.json()
    console.log(data)
    const {userId, name, email, clock, inout, address,} = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('INSERT INTO counterhours (userId, name, email, clocked, inout, address) VALUES ($1,$2,$3,$4,$5,$6)',[userId,name,email,clock,inout,address])
        return new Response(JSON.stringify({message: 'Success'}))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message:error.message}))
    } finally {
        client.end()
    }
}