import React from "react";
import { Link } from "react-router-dom";
import tangenlogo from '../images/tangenlogo.png';

const Header = (Props) => 
{
    const {activepage} = Props;

    return(
        <div>
            <div className="row">
                <h1 className="display-2 text-secondary text-center">Resturant-Utsyn</h1>
            </div>
            <div className="row">
                <nav className="navbar navbar-expand-lg justify-content-evenly">
                    <ul className="nav nav-underline">
                        <li className="nav-item px-5">
                            <h2><Link className="nav-link active" aria-current="page" to=''>Reserver bord</Link></h2>
                            {/* <p>Hei</p> */}
                            {/* <Link to="/" className={"nav-link " + ("Main Page" === activepage ? "active" : "")} aria-current="page">Main Page</Link> */}
                            
                        </li>
                        <li className="nav-item px-5">
                            <h2><Link className="nav-link text-secondary" to='meny'>Menu</Link></h2>
                            {/* <p>Hei</p> */}
                            {/* <Link to="/" className={"nav-link " + ("Main Page" === activepage) && "active"} aria-current="page">Meny</Link> */}
                        </li>
                        <li className="nav-item px-5">
                            <h2><Link className="nav-link disabled" to=''>Kontakt</Link></h2>
                            {/* <p>Hei</p> */}
                            {/* <Link to="/" className={"nav-link" + ("Main Page" === activepage) && "active"} aria-current="page">Kontakt</Link> */}
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
};

export default Header;