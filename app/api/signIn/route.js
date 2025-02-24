import Client from "pg/lib/client"


export async function POST(req) {
    const post = await req.json()
    const {signemail, signpass} = post.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT * FROM counterusers WHERE email=$1',[signemail])

        if (resp.rows[0].password === signpass) {
            return new Response(JSON.stringify({isLogged: true, isadmin: resp.rows[0].isadmin, message: 'Success'}))
        } else {
            return new Response(JSON.stringify({isLogged: false, isadmin: false, message: 'Password don\'t match with our records'}))
        }
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    } finally {
        client.end()
    }
}