'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import CategoryItem from "./Components/CategoryItem";
import { Henny_Penny } from "next/font/google";
import CreateCategoryModal from "./Components/CreateCategoryModal";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { fetchAllFood, fetchCategories, set_error } from "../lib/features/countSlice";
import { setRegError } from "../lib/features/passSlice";


const henPen = Henny_Penny({
    subsets: ['latin'],
    weight: ['400']
})

export default function AddCategoryPage() {

    const count = useSelector(state=>state.count)
    const user = useSelector(state=>state.pass)
    const hours = useSelector(state=>state.hours)
    const categories = count.categories
    const error = user.regerror
    const dispatch = useDispatch()

    useEffect(()=>{
        if (categories) {
            dispatch(fetchCategories())
        }
    },[])

    useEffect(()=>{
        console.log('error')
        dispatch(fetchCategories())
        dispatch(fetchAllFood())
        setTimeout(() => {
            dispatch(setRegError(''))
        }, 3000);
        
    },[count.error])

    useEffect(()=>{
        dispatch(setRegError(''))
    },[hours.error])

    return(
        <div>
            <NavBar />
            <div className="w-[90%] md:w-[60%] mx-auto mt-10 rounded">
            <div className={`text-center text-3xl my-2 ${henPen.className}`}>Categories</div>
            <CreateCategoryModal />
            <div className={`w-full text-center font-bold}`}>{error}</div>
                <ul className="pl-0">
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