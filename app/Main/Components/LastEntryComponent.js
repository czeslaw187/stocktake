export default function LastEntryComponent({el}) {
    const day = new Date(parseInt(el.date)).toDateString()
    const hour = new Date(parseInt(el.date)).getHours()
    const minute = new Date(parseInt(el.date)).getMinutes()
    console.log(el)
    return(
        <li className="w-[90%] h-auto md:h-[3rem] rounded shadow-md shadow-gray-500 mx-auto my-3 grid grid-cols-1 md:grid-cols-4 justify-items-center place-items-center">
            <div>
                <div>{day}</div>
                <div>{hour}:{minute}</div>
            </div>
            <div>{el.name}</div>
            <div>{el.product} {el.category}</div>
            <div>{el.amount < 0 ? el.amount : `+${el.amount}`}</div>
        </li>
    )
}