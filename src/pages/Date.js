import NavBar from "../components/Navbar";
import { Link , useLoaderData, useOutletContext} from "react-router-dom";
import TestButton from "../components/TestButton";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import './styles.css'
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
            {/* <div className="col mb-2" style={{display: "grid", placeItems: "center"}}>
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
            </div> */}

            <ul className="list-group list-group-flush">
                {[...Array(11).keys()].map((item, index) => (
                    <li className="list-group-item">
                        <div class="row align-items-center">
                            <div class="col">
                                <h1 className="display-2"><b>{index}</b></h1>
                                <h4 className="">Tirsdag</h4>
                            </div>
                            <div class="col-8">
                                <h1 className="ps-5">Reserver Bord Denne Dagen</h1>
                            </div>
                            <div class="col">

                            </div>
                            
                        </div>
                        <div>
                            hei
                        </div>
                           
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Date;