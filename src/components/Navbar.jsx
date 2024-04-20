import React from "react";
import { Link } from "react-router-dom";
import tangenlogo from '../images/tangenlogo.png';
import './../pages/styles.css'

const Header = (Props) => 
{
    const {activepage} = Props;

    return(
        <div>
            <h1 className="display-2 text-secondary text-center">Resturant-Utsyn</h1>
            <nav className="navbar justify-content-center" id="test">
                <ul className="nav nav-underline">
                    <li className="nav-item px-0 px-md-5">
                        <h2><Link className="nav-link active" aria-current="page" to=''>Reserver bord</Link></h2>
                    </li>
                    <li className="nav-item px-0 px-md-5">
                        <h2><Link className="nav-link text-secondary" to='meny'>Menu</Link></h2>
                    </li>
                    <li className="nav-item px-0 px-md-5">
                        <h2><Link className="nav-link disabled" to=''>Kontakt</Link></h2>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;