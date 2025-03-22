export default function LastEntryComponent({el}) {
    const day = new Date(parseInt(el.date)).toDateString()
    const hour = new Date(parseInt(el.date)).getHours()
    const minute = new Date(parseInt(el.date)).getMinutes()
    return(
        <li className="w-[90%] h-auto md:h-[3rem] text-xs md:text-lg rounded shadow-md shadow-gray-500 mx-auto my-3 grid grid-cols-2 md:grid-cols-5 justify-items-start md:justify-items-center place-items-start md:place-items-center">
            <div>
                <div>{day}</div>
                <div>{hour}:{minute}</div>
            </div>
            <div>{el.name}</div>
            <div className="font-bold md:font-normal">{el.product} {el.category}</div>
            <div>{el.amount < 0 ? el.amount : `+${el.amount}`}</div>
            <div>{el.workplace}</div>
        </li>
    )
}