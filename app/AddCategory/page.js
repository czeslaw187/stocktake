'use client'

import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/Navbar";
import CategoryItem from "./Components/CategoryItem";
import { Henny_Penny } from "next/font/google";

const henPen = Henny_Penny({
    subsets: ['latin'],
    weight: ['400']
})

export default function AddCategoryPage() {

    const categories = useSelector(state=>state.count.categories)
    const dispatch = useDispatch()

    console.log(categories)

    return(
        <div>
            <NavBar />
            <div className="w-[60%] mx-auto mt-10 rounded">
            <div className={`text-center text-3xl my-2 ${henPen.className}`}>Categorie</div>
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