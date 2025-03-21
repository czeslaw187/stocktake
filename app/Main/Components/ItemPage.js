'use client'

import NavBar from "@/app/Components/Navbar";
import { fetchAllFood, fetchFood, set_error } from "@/app/lib/features/countSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateItemModal from "./CreateItemModal";
import RenderedItemComponent from "./RenderedItemComponent";
import { Henny_Penny } from "next/font/google";
import { fetchAllUsers } from "@/app/lib/features/passSlice";
import WorkList from "./WorkList";

const henpen = Henny_Penny({
    subsets: ['latin'],
    weight: '400'
})

export default function ItemPage({slug}) {

    const user = useSelector(state=>state.pass)
    const cat = useSelector(state=>state.count)
    const dispatch = useDispatch()
    const [place,setPlace] = useState(user.currentUser[0]?.workplace)
    const filtered = cat.food.filter((it)=>{return it.category === slug && it.workplace === place})

    useEffect(()=>{
        dispatch(fetchAllUsers())
    },[])

    useEffect(()=>{
        dispatch(fetchAllFood())
        setTimeout(() => {
            dispatch(set_error(''))
        }, 3000);
    },[cat.error])
    
    return(
        <div className="w-full flex flex-col justify-center">
            <NavBar />
            <div className={`text-center text-3xl my-2 ${henpen.className}`}>{slug}</div>
                {user.isAdmin ? <CreateItemModal slug={slug} /> : null}
                {user.isAdmin ? <WorkList place={place} setPlace={setPlace}/> : null}
                <ul className="w-full h-max text-center flex flex-row flex-wrap pl-0">
                    {
                        filtered && filtered.map((el,id)=>{
                            return(
                                <RenderedItemComponent key={id} el={el} />
                            )
                        })
                    }
                </ul>
        </div>
    )
}