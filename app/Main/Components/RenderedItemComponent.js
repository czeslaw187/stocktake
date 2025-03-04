import TrashButtonModal from "./TrashButtonModal";
import { Concert_One } from "next/font/google";
import UpdateFoodModal from "./UpdateFoodModal";
import { useSelector } from "react-redux";

const concert = Concert_One({
    subsets: ['latin'],
    weight: '400'
})

export default function RenderedItemComponent({el}) {

    const user = useSelector(state=>state.pass)

    return(
            <li key={el.id} className={`w-full md:w-[15rem] h-[15rem] text-2xl grid justify-items-center place-items-center mx-3 my-2 shadow-md rounded-md shadow-gray-700 ${el.quantity > 0 ? 'bg-sky-200' : 'bg-red-400'} ${concert.className}`}>
                <div className="col-span-2 text-center p-1">{el.name}</div>
                <div className="text-center">{el.unit}</div>
                <div>{el.quantity}</div>
                <div>
                    <UpdateFoodModal el={el} />
                </div>
                <div>
                    {user.isAdmin ? <TrashButtonModal el={el} /> : null}
                </div>
            </li>
    )
}