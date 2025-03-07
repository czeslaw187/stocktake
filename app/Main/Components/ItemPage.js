'use client'

import NavBar from "@/app/Components/Navbar";
import { fetchAllFood, fetchFood, set_error } from "@/app/lib/features/countSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateItemModal from "./CreateItemModal";
import RenderedItemComponent from "./RenderedItemComponent";
import { Henny_Penny } from "next/font/google";

const henpen = Henny_Penny({
    subsets: ['latin'],
    weight: '400'
})

export default function ItemPage({slug}) {

    const cat = useSelector(state=>state.count)
    const dispatch = useDispatch()
    const filtered = cat.food.filter((it)=>{return it.category === slug})
    const user = useSelector(state=>state.pass)

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