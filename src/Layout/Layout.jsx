import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Layout = () => {
    return (
        <div className="bg-base-100">
            <div className="max-w-[1500px] mx-auto">
            
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Layout;