import TrashButtonModal from "./TrashButtonModal"

export default function FoodItem({el}) {

    return(
        <li className="w-[70%] h-[5rem] text-xl mx-auto my-2 p-2 rounded-md shadow-md flex justify-between items-center bg-gradient-to-tr from-stone-200 to-sky-300">
            <div>{el.name}</div>
            <div>{el.unit}</div>
            <div>{el.quantity}</div>
            <div>{el.category}</div>
            <TrashButtonModal id={el.id} />
        </li>
    )
}