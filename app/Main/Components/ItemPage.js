'use client'

import NavBar from "@/app/Components/Navbar";
import { fetchFood } from "@/app/lib/features/countSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateItemModal from "./CreateItemModal";
import RenderedItemComponent from "./RenderedItemComponent";

export default function ItemPage({slug}) {

    const cat = useSelector(state=>state.count)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!cat?.food) {
            dispatch(fetchFood(slug))
        }
    },[])

    console.log(cat.food,'STORE')
    return(
        <div className="w-full">
            <NavBar />
            <div>{slug}</div>
                <CreateItemModal slug={slug} />
                <ul className="w-full h-max text-xl text-center flex flex-row flex-wrap">
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