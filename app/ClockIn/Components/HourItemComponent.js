import { useDispatch, useSelector } from "react-redux"

export default function HourItemComponent({el}) {

    const user = useSelector(state=>state.pass)
    const dispatch = useDispatch()
    const day = new Date(parseInt(el.clocked)).toDateString()
    const hour = new Date(parseInt(el.clocked)).getHours()
    const minute = new Date(parseInt(el.clocked)).getMinutes()

    return(
        <li className="w-[90%] h-auto p-2 mx-auto grid grid-cols-1 md:grid-cols-4 justify-items-start md:justify-items-center rounded shadow-md shadow-zinc-500">
            <div className="text-lg font-bold">{el.name}</div>
            <div>{el.email}</div>
            <div className='underline md:no-underline italic'>{hour}:{minute < 10 ? 0 : null}{minute} {day}</div>
            <div className="text-xl font-bold">{el.inout ? 'In' : 'Out'}</div>
            <div className="md:col-span-4 text-lef justify-self-start">{el.address}</div>
        </li>
    )
}