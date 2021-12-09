import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Sider from "./Sider";
import PikachuRun from "../images/pikachu.svg";

const Pikachu = () => {
    return (
        <>
            <Sider/>
            <Nav/>
            <div className="space">
                <img className="pikachu" src={PikachuRun}/>
            </div>
            <Footer/>
        </>
    ); 
}; 

export default Pikachu; 