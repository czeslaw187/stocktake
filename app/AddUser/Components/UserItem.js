import { Bangers } from "next/font/google"
import { useState } from "react"
import { useSelector } from "react-redux"
import TrashUserModal from "./TrashUserModal"

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400'
})

export default function UserItem({el}) {

    return(
        <li className={`h-auto md:h-[6rem] my-3 grid grid-cols-1 md:grid-cols-5 justify-items-center place-items-center shadow-md shadow-zinc-500 text-lg ${bangers.className}`}>
            <div>{el.name}</div>
            <div>{el.email}</div>
            <div>
                {el.password}
            </div>
            <div>Admin {el.isadmin ? 'Yes' : 'No'}</div>
                {el.isadmin ? null : <TrashUserModal el={el} />}
        </li>
    )
}