'use client'

import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/Navbar";
import { Gruppo, Henny_Penny, Parkinsans } from "next/font/google";
import { useEffect, useState } from "react";
import LastEntryComponent from "./Components/LastEntryComponent";
import { fetchEntries } from "../lib/features/entrySlice";
import WorkList from "./Components/WorkList";
import { fetchAllUsers } from "../lib/features/passSlice";

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400'
})
const henPen = Henny_Penny({
  subsets: ['latin'],
  weight: '400'
})
const parks = Parkinsans({
  subsets: ['latin'],
  weight: '400'
})

export default function Main_Page() {

  const store = useSelector(state=>state.count)
  const entries = useSelector(state=>state.entry)
  const user = useSelector(state=>state.pass)
  const dispatch = useDispatch()
  const [place,setPlace] = useState(user.currentUser[0]?.workplace)

  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchEntries({workplace: place}))
  }, []);
  console.log(entries)

  useEffect(()=>{
    dispatch(fetchEntries({workplace: place}))
  },[place])

  return(
    <div>
      <NavBar />
      <div className={`text-3xl text-center my-2 ${henPen.className}`}>Last Update</div>
      {user.isAdmin ? <WorkList place={place} setPlace={setPlace}/> : null}
      <div className="w-[90%] h-[2rem] rounded shadow-md shadow-gray-500 mx-auto my-3 hidden md:grid grid-cols-5 gap-3 justify-items-center place-items-center ">
        <div>Date</div>
        <div>Name</div>
        <div>Product</div>
        <div>Amount</div>
        <div>Workplace</div>
      </div>
      <ul className={`w-screen h-auto mt-3 pl-0 ${parks.className}`}>
        {
          entries.entries && entries.entries.map((el,id)=>{
            return(
              <LastEntryComponent key={id} el={el} />
            )
          })
        }
      </ul>
    </div>
  )
}