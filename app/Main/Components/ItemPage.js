'use client'

import NavBar from "@/app/Components/Navbar";
import { fetchFood } from "@/app/lib/features/countSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "reactstrap";
import FoodItem from "./FoodItem";
import CreateItemModal from "./CreateItemModal";

export default function ItemPage({slug}) {

    const cat = useSelector(state=>state.count)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!cat?.food) {
            dispatch(fetchFood(slug))
        }
    },[])

    console.log(cat.food,'store')
    return(
        <div>
            <NavBar />
            <div className="flex flex-col justify-center">
                <div className="w-full text-xl text-center">{slug}</div>
                <CreateItemModal slug={slug} />
                <ListGroup>
                    {
                        cat.food && cat.food.map((el,id)=>{
                            return(
                                <FoodItem key={id} el={el} />
                            )
                        })
                    }
                </ListGroup>
            </div>
        </div>
    )
}