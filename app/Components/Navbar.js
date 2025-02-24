'use client'

import { Navbar, Collapse, NavbarToggler, Nav, NavbarBrand } from "reactstrap";
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
                <NavbarBrand>FU</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
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