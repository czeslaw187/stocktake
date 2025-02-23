import { Navbar, Collapse, NavbarToggler, Nav } from "reactstrap";
import NavbarItem from "./NavbarItem";
import { useState } from "react";

const labels = ['FOOD', 'BEER', 'SPIRIT']

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return(
        <div className="bg-gradient-to-bl from-amber-300 to-indigo-400">
            <Navbar>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        {
                            labels.map((el,id)=>{
                                return(
                                    <NavbarItem key={id} el={el} />
                                )
                            })
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}