'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers, fetchUsers, setRegError } from "../lib/features/passSlice"
import UserItem from "./Components/UserItem"
import NavBar from "../Components/Navbar"
import { Henny_Penny, Bangers } from "next/font/google"
import CreateUserModal from "./Components/CreateUserModal"
import ClearHoursModal from "./Components/ClearHoursModal"
import { fetchHours } from "../lib/features/hoursSlice"

const henPen = Henny_Penny({
    subsets: ['latin'],
    weight: '400'
})

const bangers = Bangers({
    subsets: ['latin'],
    weight: ['400']
})

export default function AddUser() {

    const dispatch = useDispatch()
    const users = useSelector(state=>state.pass.users)
    const error = useSelector(state=>state.pass)

    useEffect(()=>{
        if (users) {
            dispatch(fetchAllUsers())
        }
    },[])

    useEffect(()=>{
        setTimeout(() => {
            dispatch(setRegError(''))
        }, 3000);
        dispatch(fetchAllUsers())
    },[error.regerror])
    return(
        <div>
            <NavBar />
            <div className="w-[90%] mx-auto mt-10 rounded">
            <div className={`text-center text-3xl my-2 ${henPen.className}`}>Users</div>
            <div className={`w-full text-center text-lg text-red-500 font-bold}`}>{error.regerror}</div>
            <div className="w-full flex justify-around">
                <CreateUserModal bangers={bangers} />
            </div>
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