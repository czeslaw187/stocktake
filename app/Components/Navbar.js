'use client'

import { Navbar, Collapse, NavbarToggler, Nav, NavbarBrand } from "reactstrap";
import NavbarItem from "./NavbarItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";
import { useRouter } from "next/navigation";
import { setLogin } from "../lib/features/passSlice";
import 'bootstrap/dist/css/bootstrap.min.css';

const labels = ['FOOD', 'BEER', 'SPIRIT']

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const admin = useSelector(state=>state.pass)
    const router = useRouter()

    useEffect(()=>{
        if (!admin.isLogged) {
            router.push('/')
        }
    },[admin.isLogged])

    function toggle() {
        setIsOpen(!isOpen)
    }

    return(
        <div className="bg-gradient-to-bl from-amber-300 to-indigo-400">
            <Navbar>
                <NavbarBrand href="/Main">{admin.isadmin ? 'FU' : 'Admin'}</NavbarBrand>
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
                        <SignOut setLogin={setLogin} />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}