import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./nav";
import Sider from "./Sider";
import RozRun from "../images/roz.svg";

const Roz = () => {
    return (
        <>
            <Sider/>
            <Nav/>
            <img className="roz" src={RozRun}/>
            <Footer/>
        </>
    ); 
}; 

export default Roz; 