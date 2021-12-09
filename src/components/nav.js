import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className= "navcontainer">
                <div className = "navNames">
                <Link className="answer" to="/">
                    Homepage
                </Link>
                <Link className="answer" to="/sonic">
                    Sonic the Hedgehog
                </Link>
                <Link className="answer" to="/junior">
                    Junior
                </Link>
                <Link className="answer" to="/bread">
                    Bread Sheeran
                </Link>
                <Link className="answer" to="/pikachu">
                    Pikachu the Wizard
                </Link>
                <Link className="answer" to="/roz">
                    Roz da Boz
                </Link>
                </div>
            </div>
        </>
    ); 
}; 

export default Nav;