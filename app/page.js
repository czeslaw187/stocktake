'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFood } from "./lib/features/countSlice"

export default function Main_Page() {

  const theFood = useSelector(state=>state.food)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (!theFood) {
      dispatch(fetchFood())
    }
  },[])

  return(
    <div className="w-screen h-screen bg-gradient-to-br from-cyan-400 to-lime-200">

    </div>
  )
}