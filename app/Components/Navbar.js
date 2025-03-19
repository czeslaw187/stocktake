'use client'

import { Navbar, Collapse, NavbarToggler, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import NavbarItem from "./NavbarItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignOut from "./SignOut";
import { useRouter } from "next/navigation";
import { setLogin } from "../lib/features/passSlice";
import { clear_food, fetchCategories } from "../lib/features/countSlice";
import { Bangers } from "next/font/google";

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400',
})

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const admin = useSelector(state=>state.pass)
    const categories = useSelector(state=>state.count.categories)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!admin.isLogged || !admin.currentUser[0]) {
            dispatch(clear_food())
            router.push('/')
        }
    },[admin])

    function toggle() {
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        dispatch(fetchCategories())
    },[])

    return(
        <div className="bg-gradient-to-bl from-amber-300 to-indigo-400">
            <Navbar>
                <NavbarBrand href="/Main">{admin.currentUser[0]?.workplace} {admin.isAdmin ? 'ADMIN' : admin.currentUser[0]?.name}</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto divide-y-4 w-[100%] md:w-[20%]" navbar>
                        <NavItem hidden={admin.isAdmin ? false : true}>
                            <NavLink href={'/AddUser'} className={`${bangers.className} text-right mr-2`}>
                                <div className="text-xl">Users</div>
                            </NavLink>
                        </NavItem>
                        <NavItem hidden={admin.isAdmin ? false : true}>
                            <NavLink href={'/AddCategory'} className={`${bangers.className} text-right mr-2`}>
                                <div className="text-xl">Categories</div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={'/ClockIn'} className={`${bangers.className} text-right mr-2`}>
                                <div className="text-xl">Clock In</div>
                            </NavLink>
                        </NavItem>
                        {
                            categories && categories.map((el,id)=>{
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