import { Link } from "react-router-dom";
import logo from '../assets/logo.png'


const Navbar = () => {

    const navOptinons = <>

        <li className="text-[#3A3740] inter-font text-[15px]"><Link to='/'>Home</Link></li>
        <li className="text-[#3A3740] inter-font text-[15px]"><Link to='/'>Flashcard</Link></li>
        <li className="text-[#3A3740] inter-font text-[15px]"><Link to='/'>Contact</Link></li>
        <li className="text-[#3A3740] inter-font text-[15px]"><Link to='/'>FAQ</Link></li>
        <li className="rounded-[32px] inter-font text-[15px] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white"><Link to='/'>Login</Link></li>
    </>

    return (
        <>
            <div className="navbar fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptinons}
                        </ul>
                    </div>
                    <div>
                        <img className="w-[70px]" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        {navOptinons}
                    </ul> */}
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {navOptinons}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;