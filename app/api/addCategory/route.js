import Client from "pg/lib/client"

export async function POST(req) {
    const request = await req.json()
    const {category} = request.obj
    console.log(category)
    const client = new Client(process.env.DB_URL)
    await client.connect()
    try {
        await client.query('INSERT INTO categories (name) VALUES ($1)',[category.category])
        return new Response(JSON.stringify({message: 'New Category Created'}))
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}))
    }
}