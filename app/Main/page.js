'use client'

import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/Navbar";
import { Ultra } from "next/font/google";
import { fetchCategories } from "../lib/features/countSlice";
import { useEffect } from "react";
import LastEntryComponent from "./Components/LastEntryComponent";
import { fetchEntries } from "../lib/features/entrySlice";

const ultra = Ultra({
  subsets: ['latin'],
  weight: '400'
})

export default function Main_Page() {

  const store = useSelector(state=>state.count)
  const entries = useSelector(state=>state.entry)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!store.categories) {
      dispatch(fetchCategories())
    }
    dispatch(fetchEntries())
  }, []);

  console.log(entries, 'user')
  return(
    <div>
      <NavBar />
      <ul className={`w-screen h-auto flex flex-row flex-wrap mt-3 pl-0 ${ultra.className}`}>
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