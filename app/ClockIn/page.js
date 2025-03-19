'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import { Suspense, useEffect, useState } from "react";
import { Luckiest_Guy, Parkinsans } from "next/font/google";
import { clockIn, fetchAllUsers, fetchUsers, reverseGeo, setRegError } from "../lib/features/passSlice";
import HourItemComponent from "./Components/HourItemComponent";
import { addHour, fetchHours, insertHours } from "../lib/features/hoursSlice";
import UserList from "./Components/UserList";

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
    const [minutes,setMinutes] = useState(0)
    const [selected,setSelected] = useState('')
    const dispatch = useDispatch()
    const [position,setPosition] = useState({})
    const [prox,setProx] = useState(false)
    const filtered = selected ? hours.hours.filter(el=>el.name===selected) : hours.hours

    function getMinutes() {
        let one = hours.hours.filter((el)=>{return el.inout === true}).map((el)=>parseInt(el.clocked))
        const two = hours.hours.filter((el)=>{return el.inout === false}).map((el)=>parseInt(el.clocked))
        const three = two.map((el,id)=>{return el - one[id]}) 
        const four = three.reduce((a,b)=>a+b,0)
        const min = Math.round(four / (1000 * 60))
        return min
    }

    //-------------------------------ON CLOCK IN------------------------------------------
    function handleClockIn() {
        setProx(false)
        dispatch(clockIn({
            userId: user.currentUser[0].id,
            isIn: !user.currentUser[0].isin
        }))
        dispatch(addHour({
            userId: user.currentUser[0].id,
            name: user.currentUser[0].name,
            email: user.currentUser[0].email,
            clock: Date.now(),
            inout: !user.currentUser[0].isin,
            address: user.address
        }))
        if (minutes > 0) {
            dispatch(insertHours({
                userId: user.currentUser[0].id,
                hours: minutes
            }))
        }
    }
    //--------------------------------------ON PAGE LOAD-------------------------------------------------
    useEffect(()=>{
        dispatch(fetchUsers({userId: user.currentUser[0].id}))
        dispatch(fetchHours({userId: user.currentUser[0].id}))
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position,error)=>{
                dispatch(reverseGeo({
                    latitude: Math.round((position.coords.latitude + Number.EPSILON) * 10000) / 10000,
                    longitude: Math.round((position.coords.longitude + Number.EPSILON) * 10000) / 10000
                }))
            })
        } else {
            dispatch(setRegError('Position error'))
        }
    },[])

    //--------------------------------AFTER CLOCK IN----------------------------------------
    useEffect(() => {
        return () => {
            if (hours.hours.length % 2 === 0) {
                const min = getMinutes()
                setMinutes(min)
            }
        };
    }, [hours.hours]);

    useEffect(()=>{
        dispatch(fetchUsers({userId: user.currentUser[0].id}))
        dispatch(fetchHours({userId: user.currentUser[0].id}))
        setTimeout(() => {
            dispatch(setRegError(''))
        }, 3000);
    },[user.regerror])
    console.log(user)

    //-------------------------------------COMPONENT----------------------------------------
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-column justify-center">
                <NavBar />
                <div className={`w-[90%] h-[15rem] rounded border-4 ${user.currentUser[0]?.isin ? 'border-green-500' : 'border-red-500'} grid grid-cols-1 md:grid-cols-3 my-3 mx-auto justify-items-center place-items-center`}>
                    <button className={`w-[9rem] h-[9rem] rounded-full mx-auto md:ml-5 shadow-md text-xl bg-blue-200 shadow-zinc-700 transition duration-200 ease-out hover:bg-zinc-200 ${lucGuy.className}`}
                            onClick={()=>{handleClockIn()}}>
                        {user.currentUser[0]?.isin ? 'Clock Out' : 'Clock In'}
                    </button>
                    <div className={`${parks.className} text-2xl`}>{user.currentUser[0]?.name}</div>
                    <div className="text-2xl">{!hours.hours[0]?.inout ? `${Math.floor(minutes / 60)}h ${Math.round(minutes % 60)}min` : 'In'}</div>
                </div>
                <div className="w-full text-center">{user.regerror}</div>
                {user.isAdmin ? <UserList selected={selected} setSelected={setSelected}/> : null}
                <ul className="pl-0">
                {
                    filtered && filtered.map((el,id)=>{
                        return(
                            <HourItemComponent key={id} el={el} />
                        )
                    })
                }
                </ul>
            </div>
        </Suspense>
    )
}