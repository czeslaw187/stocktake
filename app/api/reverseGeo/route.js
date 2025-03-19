import axios from "axios"

export async function POST(req) {
    const data = await req.json()
    const {latitude, longitude} = data.obj
    try {
        let resp = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${process.env.LOCATIONIQ_KEY}&lat=${latitude}&lon=${longitude}&format=json`)
        return new Response(JSON.stringify(resp.data.display_name))
    } catch (error) {
        return new Response(JSON.stringify(error.message))
    }
}