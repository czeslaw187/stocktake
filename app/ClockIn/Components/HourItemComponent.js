import { fetchHours } from "@/app/lib/features/hoursSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function HourItemComponent({el}) {

    const user = useSelector(state=>state.pass)
    const dispatch= useDispatch()

    return(
        <li>
            {el.name}
        </li>
    )
}