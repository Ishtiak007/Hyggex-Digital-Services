import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;