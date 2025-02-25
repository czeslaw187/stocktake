export default function RenderedItemComponent({el}) {
    return(
            <li key={el.id} className="w-[15rem] h-[15rem] grid justify-items-center place-items-center m-2 shadow-md rounded-md shadow-gray-700 bg-sky-200">
                <div className="col-span-2 text-center p-1 text-xl">{el.name}</div>
                <div className="text-center">{el.quantity} {el.unit}</div>
                <div>
                    <button className="w-full h-max transition duration-200 ease-out hover:opacity-75">
                    UPDATE
                    </button>
                </div>
            </li>
    )
}