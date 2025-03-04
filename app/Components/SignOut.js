import { useDispatch } from "react-redux"
import { Luckiest_Guy } from "next/font/google"
import { getCurrentUser, getUsers } from "../lib/features/passSlice"
import { get_all_food, get_categories } from "../lib/features/countSlice"
import { get_entries } from "../lib/features/entrySlice"

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: '400'
})

export default function SignOut({setLogin}) {

    const dispatch = useDispatch()

    function handleSignOut() {
        dispatch(setLogin(false))
        dispatch(getUsers([]))
        dispatch(getCurrentUser({}))
        dispatch(get_all_food([]))
        dispatch(get_categories([]))
        dispatch(get_entries([]))
    }

    return(
        <button className={`ml-auto mr-2 ${lucky.className}`} onClick={()=>{handleSignOut()}}>Sign Out</button>
    )
}