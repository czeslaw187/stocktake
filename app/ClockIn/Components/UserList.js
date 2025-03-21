import { fetchHours } from "@/app/lib/features/hoursSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

export default function UserList() {

    const user = useSelector(state=>state.pass)
    const hours = useSelector(state=>state.hours)
    const [name,setName] = useState(user.currentUser[0]?.name)
    const dispatch = useDispatch()

    function handleSelect(el) {
        dispatch(fetchHours({userId: el.id}))
        setName(el.name)
    }
    console.log(hours)
    return(
        <div className="w-[90%] flex gap-5 mx-auto my-3 justify-self-center">
            <UncontrolledDropdown direction="right">
                <DropdownToggle caret tag="a" className="text-stone-800 text-xl font-bold">{name}</DropdownToggle>
                <DropdownMenu>
                    {
                        user.users && user.users.map((el,id)=>{
                            return(
                                <DropdownItem key={id} onClick={()=>{handleSelect(el)}}>{el.name}</DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}