'use client'

import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/Navbar";
import { Ultra } from "next/font/google";
import { fetchCategories } from "../lib/features/countSlice";
import { useEffect } from "react";
import LastEntryComponent from "./Components/LastEntryComponent";

const ultra = Ultra({
  subsets: ['latin'],
  weight: '400'
})

export default function Main_Page() {

  const store = useSelector(state=>state.count)
  const user = useSelector(state=>state.pass)
  const dispatch = useDispatch()
  const theFood = store.food

  useEffect(() => {
    if (!user.categories) {
      dispatch(fetchCategories())
    }
  }, []);

  console.log(theFood, 'store')
  console.log(user, 'user')
  return(
    <div>
      <NavBar />
      <ul className={`w-screen h-auto flex flex-row flex-wrap mt-3 pl-0 ${ultra.className}`}>
        <LastEntryComponent />
      </ul>
    </div>
  )
}