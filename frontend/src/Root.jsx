import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import backImage from "./assets/svg/backgroundImage.svg"
const Root =()=>{
    return(
        <div className=" w-[100vw] h-[100vh] bg-custom-svg bg-cover  bg-center  ">
            <Navbar/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}
export default Root;