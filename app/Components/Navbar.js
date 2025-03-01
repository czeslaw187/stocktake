'use client'

import { Navbar, Collapse, NavbarToggler, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import NavbarItem from "./NavbarItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignOut from "./SignOut";
import { useRouter } from "next/navigation";
import { setLogin } from "../lib/features/passSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import { clear_food, fetchCategories } from "../lib/features/countSlice";
import { Bangers } from "next/font/google";

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400',
})

const labels = ['Food', 'Beer', 'Spirit', 'Chemical']

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const admin = useSelector(state=>state.pass)
    const categories = useSelector(state=>state.count.categories)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!admin.isLogged) {
            dispatch(clear_food())
            router.push('/')
        }
        if (categories) {
            dispatch(fetchCategories())
        }
    },[admin])

    function toggle() {
        setIsOpen(!isOpen)
    }

    return(
        <div className="bg-gradient-to-bl from-amber-300 to-indigo-400">
            <Navbar>
                <NavbarBrand href="/Main">{admin.isadmin ? 'FU' : 'Admin'}</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href={'/AddCategory'} className={`${bangers.className} text-right mr-2`}>
                                <div className="text-xl">Add Category</div>
                            </NavLink>
                        </NavItem>
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