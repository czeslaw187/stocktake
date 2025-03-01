import { Bangers } from "next/font/google"
import TrashCategoryModal from "./TrashCategoryModal"

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400'
})

export default function CategoryItem({el}) {
    return(
        <li className={`h-[5rem] grid grid-cols-2 justify-items-center place-items-center shadow-md shadow-zinc-500 text-2xl ${bangers.className}`}>
            <div>{el.name}</div>
            <TrashCategoryModal el={el} />
        </li>
    )
}