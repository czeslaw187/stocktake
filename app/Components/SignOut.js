import { useDispatch } from "react-redux"

export default function SignOut({setLogin}) {

    const dispatch = useDispatch()

    return(
        <button className="ml-auto" onClick={()=>{dispatch(setLogin(false))}}>Sign Out</button>
    )
}