'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers, setRegError } from "../lib/features/passSlice"
import UserItem from "./Components/UserItem"
import NavBar from "../Components/Navbar"
import { Henny_Penny } from "next/font/google"
import CreateUserModal from "./Components/CreateUserModal"
import ClearHoursModal from "./Components/ClearHoursModal"

const henPen = Henny_Penny({
    subsets: ['latin'],
    weight: '400'
})

export default function AddUser() {

    const dispatch = useDispatch()
    const users = useSelector(state=>state.pass.users)
    const error = useSelector(state=>state.pass.regerror)

    useEffect(()=>{
        dispatch(fetchAllUsers())
    },[])

    useEffect(()=>{
        dispatch(fetchAllUsers())
        setTimeout(() => {
            dispatch(setRegError(''))
        }, 3000);
    },[error])
    console.log(users, 'adduser')
    return(
        <div>
            <NavBar />
            <div className="w-[90%] mx-auto mt-10 rounded">
            <div className={`text-center text-3xl my-2 ${henPen.className}`}>Users</div>
                <CreateUserModal />
                <ClearHoursModal />
            <div className={`w-full text-center font-bold}`}>{error}</div>
                <ul className="pl-0">
                    {
                        users && users.map((el,id)=>{
                            return(
                                <UserItem key={id} el={el} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}