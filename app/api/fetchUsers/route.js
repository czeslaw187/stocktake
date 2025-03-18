import Client from "pg/lib/client";

export async function POST(req) {
    const data = await req.json()
    const {userId} = data.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT id,name,email,password,isadmin,isin,hours,workplace FROM counterusers WHERE id=$1',[userId])
        return new Response(JSON.stringify(resp.rows))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}