import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import TestButton from "../components/TestButton";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useReservationContext, useState } from "react";

function Date()
{
    const { handleReservationChange } = useReservationContext
    const [buttonActive, setButtonActive] = useState(false)

    //const { handleSubmit } = useReservationContext();

    const setDay = (value) => 
    {
        //setButtonActive(true);
        const dato = `${value.getDate()}-${value.getMonth()}-${value.getFullYear()}`;
        console.log(dato);
        //handleReservationChange('hei', 'hallo');
        //handleSubmit();
    };
    return (
        <div className="container text-center">
            <div className="col mb-2">
                <NavBar activepage="Main Page"></NavBar>
            </div>

            <div className="col mb-2" style={{display: "grid", placeItems: "center"}}>
                <Calendar className="primary" onChange={setDay}/>
            </div>

            <div className="col mb-2">
                <h3>Du har valgt 25 april 2024</h3>
            </div>

            <div className="col mb-2">
                <h3>variabel</h3>
            </div>

            <div className="col mb-2">
                <Link to=""><TestButton color={buttonActive ? "primary" : "secondary"}>Veld Tidpunk</TestButton></Link>
            </div>
        </div>
    );
};

export default Date;