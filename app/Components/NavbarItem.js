import { NavItem, NavLink } from "reactstrap";
import { Bangers } from "next/font/google";

const bangers = Bangers({
    subsets: ['latin'],
    weight: '400',
})

export default function NavbarItem({el}) {

    return(
        <NavItem>
            <NavLink href={`/Main/${el.name}`} className={`${bangers.className} text-right`}>
                <div className="text-xl mr-2">{el.name}</div>
            </NavLink>
        </NavItem>
    )
}