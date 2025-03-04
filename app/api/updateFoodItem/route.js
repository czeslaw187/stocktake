import Client from "pg/lib/client"

export async function POST(req) {
    const request = await req.json()
    console.log(request.obj, 'api')
    const {id, quantity, date, name, product, amount} = request.obj
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('UPDATE counter SET quantity=$1 WHERE id=$2',[quantity, id]).then((resp)=>{
            client.query('INSERT INTO countentry (date, name, product, amount) VALUES ($1, $2, $3, $4)',[date, name, product, amount])
        })
        
        return new Response(JSON.stringify({message: 'Item updated'}))
    } catch (error) {
        return new Response(JSON.stringify({message:error.message}))
    } finally {
        client.end()
    }
}