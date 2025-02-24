import { useDispatch } from "react-redux"
import { Luckiest_Guy } from "next/font/google"

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: '400'
})

export default function SignOut({setLogin}) {

    const dispatch = useDispatch()

    return(
        <button className={`ml-auto mr-2 ${lucky.className}`} onClick={()=>{dispatch(setLogin(false))}}>Sign Out</button>
    )
}