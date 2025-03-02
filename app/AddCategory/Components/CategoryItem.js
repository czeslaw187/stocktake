import { Bangers } from "next/font/google"
import TrashCategoryModal from "./TrashCategoryModal"
import { useSelector } from "react-redux"

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400'
})

export default function CategoryItem({el}) {

    const data = useSelector(state=>state.count.food)
    const filtered = data.filter((it)=>{return it.category === el.name})
    console.log(filtered)

    return(
        <li className={`h-[5rem] grid grid-cols-3 justify-items-center place-items-center shadow-md shadow-zinc-500 text-2xl ${bangers.className}`}>
            <div>{el.name}</div>
            <div className="bg-inherit">{filtered.length}</div>
            <TrashCategoryModal el={el} filtered={filtered} />
        </li>
    )
}