import Header from "./Header";
import Nav from "./nav";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <div className="space">
                <Footer/>
            </div>
        </>
    ); 
}; 

export default Homepage;