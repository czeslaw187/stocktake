'use client'

import { useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/Navbar";
import { Ultra } from "next/font/google";

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
              <li key={id} className="w-[15rem] h-[15rem] grid justify-items-center place-items-center m-2 shadow-md rounded-md shadow-gray-700 bg-sky-200">
                <div className="col-span-2 text-center p-1 text-xl">{el.name}</div>
                <div className="text-center">{el.quantity} {el.unit}</div>
                <div>
                  <button className="w-full h-max transition duration-200 ease-out hover:opacity-75">
                    UPDATE
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}