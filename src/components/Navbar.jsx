import React from "react";
import { Link } from "react-router-dom";
import Meny from "../pages/Meny";
import tangenlogo from '../images/tangenlogo.png';

const Header = () => 
{
    return(
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <img src={tangenlogo} alt="tangen's vakre logo" width="100%" height="100%"/>
                </div>
                <div class="col">
                    <h2>hello</h2>
                </div>
            </div>
            <div class="row">
                <h1>Resturant-Utsyn</h1>
            </div>
            <div class="row">
                <ul className="nav justify-content-center nav-underline">
                    <li className="nav-item">
                        <Link to="/meny" className="nav-link active" aria-current="page">Main Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/meny" className="nav-link" aria-current="page">Meny</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/meny" className="nav-link" aria-current="page">Meny</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
};

export default Header;