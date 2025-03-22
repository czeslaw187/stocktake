import Client from "pg/lib/client"


export async function POST(req) {
    const post = await req.json()
    const {signemail, signpass} = post.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        let resp = await client.query('SELECT * FROM counterusers WHERE email=$1 AND password=$2',[signemail, signpass])

        if (resp.rows[0].password === signpass) {
            return new Response(JSON.stringify({users: resp.rows, isLogged: true, isadmin: resp.rows[0].isadmin, message: 'Success'}))
        } else {
            return new Response(JSON.stringify({isLogged: false, isadmin: false, message: 'Password don\'t match with our records'}))
        }
    } catch (error) {
        return new Response(JSON.stringify({message: 'Password don\'t match with our records'}))
    } finally {
        client.end()
    }
}