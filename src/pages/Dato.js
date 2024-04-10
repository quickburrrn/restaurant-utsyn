import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import TestButton from "../components/TestButton";

function Dato()
{
    return (
        <div className="container text-center">

            <div className="col mb-2">
                <NavBar activepage="Main Page"></NavBar>
            </div>

            <div className="col mb-2">
                <Link to=""><TestButton color="primary">Velg Dato</TestButton></Link>
            </div>
        </div>
    );
};

export default Dato;