import React from "react";
import { Link } from "react-router-dom";
import tangenlogo from '../images/tangenlogo.png';

const Header = (Props) => 
{
    const {activepage} = Props;

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
                <h1 className="display-2 justify-content-center text-secondary">Resturant-Utsyn</h1>
            </div>
            <div className="row">
                <ul className="nav nav-underline justify-content-center">
                    <li className="nav-item">
                        <Link class="nav-link" aria-current="page" to=''>Reserver bord</Link>
                        {/* <p>Hei</p> */}
                        {/* <Link to="/" className={"nav-link " + ("Main Page" === activepage ? "active" : "")} aria-current="page">Main Page</Link> */}
                        
                    </li>
                    <li className="nav-item">
                        <Link class="nav-link" to='meny'>Menu</Link>
                        {/* <p>Hei</p> */}
                        {/* <Link to="/" className={"nav-link " + ("Main Page" === activepage) && "active"} aria-current="page">Meny</Link> */}
                    </li>
                    <li className="nav-item">
                        <Link class="nav-link disabled" to=''>Kontakt</Link>
                        {/* <p>Hei</p> */}
                        {/* <Link to="/" className={"nav-link" + ("Main Page" === activepage) && "active"} aria-current="page">Kontakt</Link> */}
                    </li>
                </ul>
            </div>
            
        </div>
    )
};

export default Header;