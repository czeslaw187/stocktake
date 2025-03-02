'use client'

import NavBar from "@/app/Components/Navbar";
import { fetchFood } from "@/app/lib/features/countSlice";
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

    const category = useSelector(state=>state.count)
    const cat = category.food.filter((el)=>{return el.category === slug})
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!cat) {
            dispatch(fetchFood(slug))
        }
    },[])
    console.log(cat, slug)
    return(
        <div className="w-full flex flex-col justify-center">
            <NavBar />
            <div className={`text-center text-3xl my-2 ${henpen.className}`}>{slug}</div>
                <CreateItemModal slug={slug} />
                <ul className="w-full h-max text-center flex flex-row flex-wrap">
                    {
                        cat.food && cat.food.map((el,id)=>{
                            return(
                                <RenderedItemComponent key={id} el={el} />
                            )
                        })
                    }
                </ul>
        </div>
    )
}