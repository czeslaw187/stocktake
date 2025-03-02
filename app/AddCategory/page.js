'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import CategoryItem from "./Components/CategoryItem";
import { Henny_Penny } from "next/font/google";
import CreateCategoryModal from "./Components/CreateCategoryModal";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { fetchAllFood, fetchCategories, set_error } from "../lib/features/countSlice";


const henPen = Henny_Penny({
    subsets: ['latin'],
    weight: ['400']
})

export default function AddCategoryPage() {

    const count = useSelector(state=>state.count)
    const categories = count.categories
    const error = count.error
    const dispatch = useDispatch()

    useEffect(()=>{
        setTimeout(() => {
            dispatch(set_error(''))
        }, 3000);
        if (count?.food) {
            dispatch(fetchCategories())
            dispatch(fetchAllFood())
        }
    },[error])

    useEffect(()=>{
        if (categories) {
            dispatch(fetchCategories())
        }
    },[])

    return(
        <div>
            <NavBar />
            <div className="w-[90%] md:w-[60%] mx-auto mt-10 rounded">
            <div className={`text-center text-3xl my-2 ${henPen.className}`}>Categories</div>
            <CreateCategoryModal />
            <div className={`w-full text-center font-bold}`}>{error}</div>
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