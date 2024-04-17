import NavBar from "../components/Navbar";
import { Link , useLoaderData, useOutletContext} from "react-router-dom";
import TestButton from "../components/TestButton";
import Calendar from "react-calendar";
import ChoosePersons from "../components/ChoosePersons";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import './styles.css'
function VelgDate()
{
    //`${(new Date().getTime()+index*86400000).getDate()}-${(new Date().getTime()+index*86400000).getDate()}-${(new Date().getTime()+index*86400000).getDate()}`

    const day = new Date()

    const weekday = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Søndag"]
    const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "Oktober", "September", "November", "Desember"]

    const [count, setCount] = useOutletContext()[0];

    const [personer, SetPersoner] = useOutletContext()[1];


    //dag valgt
    const [selectIndex, setSelectedIndex] = useState(-1);

    //antall personer valgt
    const [selectAmountIndex, setselectAmountIndex] = useState(-1);

    const setGuestAmound = (value) => 
    {
        setselectAmountIndex(value);
        SetPersoner(value);
        //ganger med 86400000 fordi det er hvor mange millisekunder i en dag
    };

    const daysInMonth = (month, year) =>
    {
        return new Date(year, month, 0).getDate();
    }

    const getFuture = (daysInFuture) => 
    {
        //ganger med 86400000 fordi det er antall millisekunder i en dag
        return new Date(day.getTime()+daysInFuture*86400000)
    }

    return (
        <div className="container text-center">
            <h1 className="display-1"><b>{months[day.getMonth()]}</b></h1>

            <ul className="list-group list-group-flush">
                {[...Array(20).keys()].map((item, index) => (
                    <>
                        {getFuture(index).getDate()===1 && <h1 className="display-1"><b>{months[getFuture(index).getMonth()]}</b></h1>}

                        <li className={selectIndex === index ? 'list-group-item' : 'list-group-item'}
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                                if(selectIndex!==index)
                                {
                                    setselectAmountIndex(-1);
                                }
                                const d = getFuture(index);
                                setCount(`${' ' + d.getFullYear()}-${('0' + (d.getMonth()+1)).slice(-2)}-${d.getDate()}`)
                            }}
                        >
                            <div className="row align-items-center">
                                <div className="col">
                                    <h1 className="display-2"><b>{getFuture(index).getDate()}</b></h1>
                                    <h4 className="">{weekday[getFuture(index).getDay()]}</h4>
                                </div>
                                <div className="col-8">
                                    <h1 className="ps-5 display-5">Tiljengelig fra 12-14</h1>
                                </div>
                                <div className="col">
                            </div>

                            {selectIndex===index && 
                            <div>
                                <ChoosePersons buttonPressed={setGuestAmound}></ChoosePersons>

                                <Link to={"../informasjon"}>
                                    {selectAmountIndex !== -1 ? 
                                        
                                        <button type="button" className="btn btn-primary mt-5 px-5 py-2"><h4><b>{`Reserver bord til ${selectAmountIndex} presoner`}</b></h4></button> : 
                        
                                        <button type="button" className="btn btn-secondary mt-5 px-5 py-2" disabled><h4><b>Reserver</b></h4></button>
                                    }
                                </Link>
                            </div>
                            }
                                
                            </div>                           
                        </li>
                    </>))}
            </ul>

        </div>
    );
};

export default VelgDate;