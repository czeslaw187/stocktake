'use client'

import { useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/Navbar";
import { Ultra } from "next/font/google";
import RenderedItemComponent from "./Components/RenderedItemComponent";

const ultra = Ultra({
  subsets: ['latin'],
  weight: '400'
})

export default function Main_Page() {

  const theFood = useSelector(state=>state.count.food)

  console.log(theFood, 'store')
  return(
    <div>
      <NavBar />
      <ul className={`w-full h-auto flex flex-row flex-wrap mt-3 ${ultra.className}`}>
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