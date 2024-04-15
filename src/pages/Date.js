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

    const [selectIndex, setSelectedIndex] = useState(-1);

    const [selectAmountIndex, setselectAmountIndex] = useState(-1);

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
                    <li className={selectIndex === index ? 'list-group-item' : 'list-group-item'}
                        onClick={() => {
                            setSelectedIndex(index);
                            if(selectIndex!==index)
                            {
                                setselectAmountIndex(-1);
                            }
                        }}
                    >
                        <div class="row align-items-center">
                            <div class="col">
                                <h1 className="display-2"><b>{index}</b></h1>
                                <h4 className="">Tirsdag</h4>
                            </div>
                            <div class="col-8">
                                <h1 className="ps-5">Masse ledige bord</h1>
                            </div>
                            <div class="col">
                        </div>

                        {selectIndex===index && 
                        <div>
                            <h1 className="display-3 pb-5">Velg antall personer</h1>
                            <div className="d-flex justify-content-evenly btn-group align-items-center " role="group" arial-label="Basic radio button group">
                                {[...Array(11).keys()].map((item, index) => (
                                    <div>
                                        <input type="radio" class="btn-check" name="btnradio" id={"btnradio" + index} autocomplete="off" 
                                            onClick={() => {
                                                setselectAmountIndex(index);
                                                setCount(index)
                                            }}></input>
                                        <label class="btn btn-outline-primary btn-lg" for={"btnradio" + index}>{index}</label>
                                    </div>
                                ))}
                            </div>
                            <Link to={`../informasjon`}><button type="button" className={(selectAmountIndex !== -1 ? 'btn btn-primary' : 'btn btn-secondary') + " mt-5 px-5 py-2"}><h4><b>
                                {(selectAmountIndex !== -1 ? `Reserver bord til ${selectAmountIndex} presoner` : 'Reserver')}
                                </b></h4></button></Link>
                        </div>
                        }
                            
                        </div>                           
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Date;