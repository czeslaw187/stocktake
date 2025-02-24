import NavBar from "@/app/Components/Navbar";

export default function ItemPage({slug}) {
    return(
        <div>
            <NavBar />
            {slug}
        </div>
    )
}