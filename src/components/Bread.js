import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Sider from "./Sider";
import BreadRun from "../images/bread.svg"

const Bread = () => {
    return (
        <>
            <Sider/>
            <Nav/>
            <img className="bread" src={BreadRun}/>
            <Footer/>
        </>
    ); 
}; 

export default Bread;