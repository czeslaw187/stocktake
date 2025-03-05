import { useSelector } from "react-redux";
import NavBar from "../Components/Navbar";

export default function ClockIn_Page() {

    const user = useSelector(state=>state.pass.currentUser)
    console.log(user)
    return(
        <div>
            <NavBar />
        </div>
    )
}