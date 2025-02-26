'use client'

import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/Navbar";
import { Ultra } from "next/font/google";
import RenderedItemComponent from "./Components/RenderedItemComponent";
import { useEffect } from "react";
import { set_error } from "../lib/features/countSlice";

const ultra = Ultra({
  subsets: ['latin'],
  weight: '400'
})

export default function Main_Page() {

  const store = useSelector(state=>state.count)
  const dispatch = useDispatch()
  const theFood = store.food

  useEffect(()=>{
    setTimeout(() => {
      dispatch(set_error(''))
    }, 3000);
  },[error])

  console.log(theFood, 'store')
  return(
    <div>
      <NavBar />
      <ul className={`w-screen h-auto flex flex-row flex-wrap mt-3 ${ultra.className}`}>
        {
          theFood && theFood.map((el,id)=>{
            return(
              <RenderedItemComponent key={id} el={el} />
            )
          })
        }
      </ul>
    </div>
  )
}