import AfterBanner from "./AfterBanner";
import AfterNavbar from "./AfterNavbar";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AfterNavbar></AfterNavbar>
            <Banner></Banner>
            <AfterBanner></AfterBanner>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;