import { useState } from "react";
import { useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

export default function UserList({selected, setSelected}) {

    const user = useSelector(state=>state.pass)
    const [isOpen,setIsOpen] = useState(false)
    const userList = [...new Set(user.users.map(el=>el.name))]

    function toggle() {
        setIsOpen(!isOpen)
    }

    return(
        <div className="w-[90%] flex mx-auto my-3 justify-self-center">
            <UncontrolledDropdown>
                <DropdownToggle caret tag="a" className="text-stone-800 text-xl font-bold">{selected ? selected : 'Choose user'}</DropdownToggle>
                <DropdownMenu>
                <DropdownItem onClick={()=>{setSelected('')}}>All</DropdownItem>
                    {
                        userList && userList.map((el,id)=>{
                            return(
                                <DropdownItem key={id} onClick={()=>{setSelected(el)}}>{el}</DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}