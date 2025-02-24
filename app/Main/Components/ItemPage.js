'use client'

import NavBar from "@/app/Components/Navbar";
import { fetchFood } from "@/app/lib/features/countSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "reactstrap";
import FoodItem from "./FoodItem";

export default function ItemPage({slug}) {

    const cat = useSelector(state=>state.food)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!cat) {
            dispatch(fetchFood(slug))
        }
    },[])

    return(
        <div>
            <NavBar />
            <div className="w-full text-xl text-center">{slug}</div>
            <ListGroup>
                {
                    cat && cat.map((el,id)=>{
                        return(
                            <FoodItem el={el} />
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}