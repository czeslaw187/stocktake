'use client'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFood } from "./lib/features/countSlice"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from "reactstrap";

export default function Main_Page() {

  const theFood = useSelector(state=>state.count.food)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchFood())
  },[])

  
  console.log(theFood, 'store')
  return(
    <div className="w-screen h-full bg-gradient-to-br from-cyan-400 to-lime-200">
      <ListGroup className="w-[80%] h-[80%]">
        {
          theFood && theFood.map((el,id)=>{
            return(
              <ListGroupItem key={id}>{el.name}</ListGroupItem>
            )
          })
        }
      </ListGroup>
    </div>
  )
}