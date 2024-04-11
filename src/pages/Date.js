import NavBar from "../components/Navbar";
import { Link , useLoaderData} from "react-router-dom";
import TestButton from "../components/TestButton";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { useReservationContext } from '../contexts/ReservationContext';

function Date()
{
    const hello = useLoaderData("hey");

    const { handleReservationChange, handleSubmit } =  useReservationContext();
    const [buttonActive, setButtonActive] = useState(false);

    const setDay = (value) => 
    {
        setButtonActive(true);
        const dato = `${value.getDate()}-${value.getMonth()}-${value.getFullYear()}`;
        console.log(dato);
        handleReservationChange('hei', 'hallo');
        handleSubmit();
    };
    return (
        <div className="container text-center">
            <div className="col mb-2" style={{display: "grid", placeItems: "center"}}>
                <Calendar className="primary" onChange={setDay}/>
            </div>

            <div className="col mb-2">
                <h3>Du har valgt 25 april 2024</h3>
            </div>

            <div className="col mb-2">
                <h3>{hello + " hei"}</h3>
            </div>

            <TestButton buttonPressed={() => handleSubmit()}>Velg</TestButton>

            <div className="col mb-2">
                <Link to=""><TestButton color={buttonActive ? "primary" : "secondary"}>Veld Tidpunk</TestButton></Link>
            </div>

        </div>
    );
};

export default Date;