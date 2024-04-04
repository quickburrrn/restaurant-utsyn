import React from "react";
import { Link } from "react-router-dom";
import Meny from "../pages/Meny";
import tangenlogo from '../images/tangenlogo.png';

const Header = (Props) => 
{
    const {activepage} = Props;
    console.log(activepage)

    return(
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <img src={tangenlogo} alt="tangen's vakre logo" width="100%" height="100%"/>
                </div>
                <div className="col">
                    <h2>Login</h2>
                </div>
            </div>
            <div className="row">
                <h1>Resturant-Utsyn</h1>
            </div>
            <div className="row">
                <ul className="nav justify-content-center nav-underline">
                    <li className="nav-item">
                        <Link to="/meny" className={"nav-link " + ("Main Page" === activepage ? "active" : "")} aria-current="page">Main Page</Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to="/meny" className={"nav-link " + ("Main Page" === activepage) && "active"} aria-current="page">Meny</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/meny" className={"nav-link" + ("Main Page" === activepage) && "active"} aria-current="page">Kontakt</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
};

export default Header;