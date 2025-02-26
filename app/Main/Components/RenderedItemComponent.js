import TrashButtonModal from "./TrashButtonModal";
import { Concert_One } from "next/font/google";
import UpdateFoodModal from "./UpdateFoodModal";

const concert = Concert_One({
    subsets: ['latin'],
    weight: '400'
})

export default function RenderedItemComponent({el}) {
    return(
            <li key={el.id} className={`w-full md:w-[15rem] h-[15rem] text-2xl grid justify-items-center place-items-center mx-3 my-2 shadow-md rounded-md shadow-gray-700 bg-sky-200 ${concert.className}`}>
                <div className="col-span-2 text-center p-1">{el.name}</div>
                <div className="text-center">{el.quantity} {el.unit}</div>
                <div>
                    <UpdateFoodModal />
                </div>
                <div className="col-start-2">
                    <TrashButtonModal el={el} />
                </div>
            </li>
    )
}