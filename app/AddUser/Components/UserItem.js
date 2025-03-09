import { Bangers } from "next/font/google"
import TrashUserModal from "./TrashUserModal"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400'
})

export default function UserItem({el, error}) {

    const [reveal,setReveal] = useState(false)

    function toggle() {
        setReveal(!reveal)
    }

    return(
        <li className={`h-auto md:h-[6rem] my-3 grid grid-cols-1 md:grid-cols-5 justify-items-center place-items-center shadow-md text-lg ${bangers.className} ${el.isin ? 'shadow-green-600' : 'shadow-red-600'}`}>
            <div>{el.name}</div>
            <div>{el.email}</div>
            <div>
                <input name={'password'} type={reveal ? 'text' : 'password'} className="bg-inherit text-center" value={el.password} disabled/>
                <button onClick={toggle}>
                    {<FontAwesomeIcon icon={reveal ? faEye : faEyeSlash} />}
                </button>
            </div>
            <div>Admin {el.isadmin ? 'Yes' : 'No'}</div>
                {el.isadmin ? null : <TrashUserModal el={el} />}
        </li>
    )
}