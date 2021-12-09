import { Link } from "react-router-dom";
import Footer from "./Footer";
import Sider2 from "./Sider";
import Nav from "./nav";
import sonic from "../images/sonic.svg";

const Sonic = () => {
    return (
        <>
            <Sider2/>
            <Nav/>
            <img className="sonic" src= {sonic}/>
            <Footer/>
        </>
    ); 
}; 

export default Sonic; 