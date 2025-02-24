import NavBar from "@/app/Components/Navbar";
import ItemPage from "../Components/ItemPage"
import 'bootstrap/dist/css/bootstrap.min.css';

export default async function Items({params}) {
    const slug = (await params).slug
    console.log(slug,'slug')
    return(
        <>
            <NavBar />
            <ItemPage slug={slug} />
        </>    
    )
}