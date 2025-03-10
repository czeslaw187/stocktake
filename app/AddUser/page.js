'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers, setRegError } from "../lib/features/passSlice"
import UserItem from "./Components/UserItem"
import NavBar from "../Components/Navbar"
import { Henny_Penny, Bangers } from "next/font/google"
import CreateUserModal from "./Components/CreateUserModal"
import ClearHoursModal from "./Components/ClearHoursModal"

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
    const hours = useSelector(state=>state.hours)

    useEffect(()=>{
        if (users) {
            dispatch(fetchAllUsers())
        }
        // if (hours.hours) {
        //     dispatch(fetchHours({userId: error.currentUser[0].id}))
        // }
    },[])

    useEffect(()=>{
        dispatch(fetchAllUsers())
        setTimeout(() => {
            dispatch(setRegError(''))
        }, 3000);
    },[error.regerror])
    console.log(error, hours)
    return(
        <div>
            <NavBar />
            <div className="w-[90%] mx-auto mt-10 rounded">
            <div className={`text-center text-3xl my-2 ${henPen.className}`}>Users</div>
            <div className={`w-full text-center text-lg text-red-500 font-bold}`}>{error.regerror}</div>
            <div className="w-full flex justify-around">
                <CreateUserModal bangers={bangers} />
                <ClearHoursModal bangers={bangers} />
            </div>
                <ul className="pl-0">
                    {
                        users && users.map((el,id)=>{
                            return(
                                <UserItem key={id} el={el} hours={hours}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}