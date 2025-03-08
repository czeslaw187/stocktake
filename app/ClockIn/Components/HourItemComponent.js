import { useDispatch, useSelector } from "react-redux"

export default function HourItemComponent({el}) {

    const user = useSelector(state=>state.pass)
    const dispatch = useDispatch()
    const day = new Date(parseInt(el.clocked)).toDateString()
    const hour = new Date(parseInt(el.clocked)).getHours()
    const minute = new Date(parseInt(el.clocked)).getMinutes()

    return(
        <li className="w-[90%] h-auto py-2 mx-auto grid grid-cols-4 justify-items-center">
            <div>{el.name}</div>
            <div>{el.email}</div>
            <div>{hour}:{minute < 10 ? 0 : null}{minute} {day}</div>
            <div>{el.inout ? 'Out' : 'In'}</div>
        </li>
    )
}