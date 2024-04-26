import AfterBanner from "./AfterBanner";
import AfterNavbar from "./AfterNavbar";
import Banner from "./Banner";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AfterNavbar></AfterNavbar>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
        </div>
    );
};

export default Home;