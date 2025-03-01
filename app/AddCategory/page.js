'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import { fetchCategories } from "../lib/features/countSlice";
import { useEffect } from "react";

export default function AddCategoryPage() {

    const categories = useSelector(state=>state.count.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, []);
    console.log(categories)

    return(
        <div>
            <NavBar />
            <div className="w-[80%] mx-auto rounded shadow-md shadow-zinc-500">

            </div>
        </div>
    )
}