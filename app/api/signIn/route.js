import Client from "pg/lib/client"


export default async function POST(req) {
    const {email, password} = await req.json()
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT * FROM counterusers WHERE email=$1',[email])
        respJson = await resp.json()
        if (respJson.rows.password === password) {
            return new Response(JSON.stringify(true))
        } else {
            return new Response(JSON.stringify(false))
        }
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}