import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root =()=>{
    return(
        <div className=" w-[100vw] h-[100vh]  bg-slate-700">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Root;