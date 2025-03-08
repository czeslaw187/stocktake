'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { Luckiest_Guy, Parkinsans } from "next/font/google";
import { clockIn, fetchAllUsers, fetchUsers, setRegError } from "../lib/features/passSlice";
import HourItemComponent from "./Components/HourItemComponent";
import { addHour, fetchHours } from "../lib/features/hoursSlice";

const lucGuy = Luckiest_Guy({
    subsets:['latin'],
    weight: '400'
})
const parks = Parkinsans({
    subsets:['latin'],
    weight:'500'
})
export default function ClockIn_Page() {

    const user = useSelector(state=>state.pass)
    const hours = useSelector(state=>state.hours)
    const dispatch = useDispatch()
    const [position,setPosition] = useState({})
    const [prox,setProx] = useState(false)
    // const hase = [53.72441,-0.43560]
    const hase = [53.73937, -0.37347]
    //-------------------------------ON CLOCK IN------------------------------------------
    function handleClockIn() {
        if (position.latitude > (hase[0] + 0.00011) || position.latitude < (hase[0] - 0.00011) || position.longitude > (hase[1] + 0.0003) || position.longitude < (hase[1] - 0.0003)) {
            dispatch(setRegError('You are out of range'))
            setProx(false)
        } else {
            if (user.currentUser[0]) {
                const entry = {
                    userId: user.currentUser[0].id,
                    isIn: !user.currentUser[0].isin
                }
                const hour = {
                    userId: user.currentUser[0].id,
                    name: user.currentUser[0].name,
                    email: user.currentUser[0].email,
                    clock: Date.now()
                }
                dispatch(clockIn(entry))
            }
            setProx(true)
            dispatch(addHour(hour))
        }
    }
    //--------------------------------------ON PAGE LOAD-------------------------------------------------
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position,error)=>{
                setPosition({
                    latitude: Math.round((position.coords.latitude + Number.EPSILON) * 100000) / 100000,
                    longitude: Math.round((position.coords.longitude + Number.EPSILON) * 100000) / 100000
                })
            })
        }
        dispatch(fetchAllUsers())
        dispatch(fetchHours(user.currentUser[0].id))
        console.log(hours,'hours')
    },[])
    //--------------------------------AFTER CLOCK IN----------------------------------------
    useEffect(()=>{
        setTimeout(() => {
            dispatch(setRegError(''))
        }, 3000);
        if (user.currentUser.length > 0) {
            dispatch(fetchUsers({userId:user.currentUser[0].id}))
            dispatch(fetchHours({userId:user.currentUser[0].id}))
        }
    },[user.regerror])
    //-------------------------------------COMPONENT----------------------------------------
    return(
        <div className="flex flex-column justify-center">
            <NavBar />
            <div className={`w-[90%] h-[15rem] rounded border-4 ${user.currentUser[0]?.isin ? 'border-green-500' : 'border-red-500'} grid grid-cols-1 md:grid-cols-3 my-3 mx-auto justify-items-center place-items-center`}>
                <button className={`w-[9rem] h-[9rem] rounded-full mx-auto md:ml-5 shadow-md text-xl bg-blue-200 shadow-zinc-700 transition duration-200 ease-out hover:bg-zinc-200 ${lucGuy.className}`}
                        onClick={()=>{handleClockIn()}}>
                    {user.currentUser[0]?.isin ? 'Clock Out' : 'Clock In'}
                </button>
                <div className={`${parks.className} text-2xl`}>{user.currentUser[0]?.name}</div>
            </div>
            <div className="w-full text-center">{user.regerror}</div>
            <ul>
            {
                hours.hours && hours.hours.map((el,id)=>{
                    return(
                        <HourItemComponent key={id} el={el} />
                    )
                })
            }
            </ul>
        </div>
    )
}