import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Sider2 from "./Sider";
import JuniorRun from "../images/junior.svg";

const Junior = () => {
    return (
        <>
            <Sider2/>
            <Nav/>
            <img className= "junior" src= {JuniorRun}/>
            <Footer/>
        </>
    ); 
}; 

export default Junior; 