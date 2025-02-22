'use client'

import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Main_Page() {

  const theFood = useSelector(state=>state.food)
  const theDrink = useSelector(state=>state.drink)

  useEffect(()=>{
    console.log(theFood, theDrink, 'store')
  },[])

  return(
    <div className="w-screen h-screen bg-gradient-to-br from-cyan-400 to-lime-200">

    </div>
  )
}