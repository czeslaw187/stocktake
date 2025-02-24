import { NavItem, NavLink } from "reactstrap";
import { Dancing_Script } from "next/font/google";

const daScri = Dancing_Script({
    subsets: ['latin'],
    weight: '400'
})

export default function NavbarItem({el}) {

    return(
        <NavItem>
            <NavLink href={`/Main/${el}`} className={`${daScri.className} text-xl`}>
                {el}
            </NavLink>
        </NavItem>
    )
}