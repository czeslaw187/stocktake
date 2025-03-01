'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import { useEffect } from "react";
import { ListGroup } from "reactstrap";
import CategoryItem from "./Components/CategoryItem";

export default function AddCategoryPage() {

    const categories = useSelector(state=>state.count.categories)
    const dispatch = useDispatch()

    console.log(categories)

    return(
        <div>
            <NavBar />
            <div className="w-[60%] mx-auto mt-10 rounded">
                <ul>
                    {
                        categories && categories.map((el,id)=>{
                            return(
                                <CategoryItem key={id} el={el} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}