import { Bangers } from "next/font/google"
import TrashUserModal from "./TrashUserModal"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import ClearHoursModal from "./ClearHoursModal"

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400'
})

export default function UserItem({el}) {

    const [reveal,setReveal] = useState(false)
    const hrs = Math.floor(el.hours / 60)
    const min = Math.round(el.hours % 60)

    function toggle() {
        setReveal(!reveal)
    }
    return(
        <li className={`h-auto md:h-[6rem] my-3 grid grid-cols-1 md:grid-cols-7 justify-items-center place-items-center shadow-md text-lg ${bangers.className} ${el.isin ? 'shadow-green-600' : 'shadow-red-600'}`}>
            <div>{el.name}</div>
            <div>{el.email}</div>
            <div className="flex">
                <input name={'password'} type={reveal ? 'text' : 'password'} className="bg-inherit text-center w-auto" value={el.password} disabled/>
                <button onClick={toggle}>
                    {<FontAwesomeIcon icon={reveal ? faEye : faEyeSlash} />}
                </button>
            </div>
            <div>Admin {el.isadmin ? 'Yes' : 'No'}</div>
            <div>{`${hrs}h ${min}min`}</div>
            <ClearHoursModal el={el} faStopwatch={faStopwatch} FontAwesomeIcon={FontAwesomeIcon} />
            {el.isadmin ? null : <TrashUserModal el={el} />}
        </li>
    )
}