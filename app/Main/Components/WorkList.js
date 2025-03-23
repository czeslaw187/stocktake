import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"

export default function WorkList({place, setPlace}) {

    const user = useSelector(state=>state.pass)
    const hours = useSelector(state=>state.hours)
    const dispatch = useDispatch()

    return(
        <div className="w-[90%] flex gap-5 mx-auto my-3 justify-self-center">
            <UncontrolledDropdown direction="right">
                <DropdownToggle caret tag="a" className="text-stone-800 text-xl font-bold">{place}</DropdownToggle>
                <DropdownMenu>
                    {
                        user.users && user.users.map((el,id)=>{
                            return(
                                <DropdownItem key={id} onClick={()=>{setPlace(el.workplace)}}>{el.workplace}</DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}