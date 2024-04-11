import NavBar from "../components/Navbar";
import { Link , useLoaderData, useOutletContext} from "react-router-dom";
import TestButton from "../components/TestButton";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

function Date()
{
    const [count, setCount] = useOutletContext()[0];

    const [dateActive, setDateActive] = useState(false);

    const setDay = (value) => 
    {
        setDateActive(true);
        const dato = `${value.getDate()}-${value.getMonth()}-${value.getFullYear()}`;
        setCount(dato);
    };
    return (
        <div className="container text-center">
            <div className="col mb-2" style={{display: "grid", placeItems: "center"}}>
                <Calendar className="primary" onChange={setDay}/>
            </div>

            <div className="col mb-2">
                <h3>{"Du har valgt " + count}</h3>
            </div>

            <div className="col mb-2">
                {dateActive ? 
                <Link to={`../tid`}><TestButton color="primary" >Veld Tidpunk</TestButton></Link>
                 : 
                <TestButton color="secondary disabled">Veld Tidpunk</TestButton>}
            </div>

        </div>
    );
};

export default Date;