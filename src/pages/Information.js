import React from "react";
import { Link, useOutletContext, useNavigate, redirect } from "react-router-dom";
import TestButton from "../components/TestButton";
import axios from "axios";

function Information()
{
    const navigate = useNavigate();

    const [count, setCount] = useOutletContext()[0];
    const [personer, SetPersoner] = useOutletContext()[1];
    const [navn, setNavn] = useOutletContext()[2];
    const [telefonnnumer, setTelefonnnumer] = useOutletContext()[4];
    const [email, setEmail] = useOutletContext()[4];
    const [extra, setExtra] = useOutletContext()[5];

    const commitKvitering = () => 
    {
        const fullnavn = navn.split(" ");

        console.log({
            Dato: count,
            Fornavn: fullnavn[0],
            Etternavn: `${fullnavn.length>0 ? fullnavn[1] : 'None'}`,
            Telefonnummer: telefonnnumer,
            Epost: email,
            ExtraInfo: extra
        })

        axios.post('https://restaurant-utsyn-api.vercel.app/reservasjon',
        {
            Dato: count,
            Fornavn: fullnavn[0],
            Etternavn: `${fullnavn.length>0 ? fullnavn[1] : 'None'}`,
            Telefonnummer: telefonnnumer,
            Epost: email,
            ExtraInfo: extra
        })
        .then(res => {axios.get('https://restaurant-utsyn-api.vercel.app/reservasjoner').then(function (responce){console.log(responce.data)});})
        .catch(err => console.log("err"));

        navigate('../kvitering');
    }

    const handleSetName = (event) => 
    {
        setNavn(event.target.value);
    }

    const handleSetTelefonnnumer = (event) => 
    {
        setTelefonnnumer(event.target.value);
    }

    const handleSetEmail = (event) => 
    {
        setEmail(event.target.value);
    }

    const handleSetExtra = (event) => 
    {
        setExtra(event.target.value);
    }

    return(
        <div className="text-center container">
            <div className="row">
                <h1 className="display-2">Først litt informasjon</h1>
                <p className="display-6 mb-5 mx-6">* er obligatorsk</p>
            </div>
            
            <form className="row align-items-center">
                <div className="form-group m-4 row">
                    <label htmlFor="exampleInputEmail1"><h2 className="display-5">Fult navn*</h2></label>
                    <input type="email" className="form-control-lg" id="name" aria-describedby="emailHelp" placeholder="Skriv fult navn" onChange={handleSetName}/>
                </div>
                
                <div className="form-group m-4 row">
                    <label htmlFor="email"><h2 className="display-5">Telefonnummer*</h2></label>
                    <input type="email" className="form-control-lg" id="phone" aria-describedby="emailHelp" placeholder="12345678" onChange={handleSetTelefonnnumer}/>
                </div>

                <div className="form-group m-4 row">
                    <label htmlFor="email"><h2 className="display-5">Email</h2></label>
                    <input type="email" className="form-control-lg" id="email" aria-describedby="emailHelp" placeholder="Skriv email adresse" onChange={handleSetEmail}/>
                </div>
                
                <div className="form-group m-4 row">
                    <label htmlFor="exampleFormControlTextarea1"><h2 className="display-5">Extra informasjon</h2></label>
                    <textarea className="form-control-lg" id="extra" rows="3" onChange={handleSetExtra}></textarea>
                </div>

                {telefonnnumer !== "None" && navn !== "None None"? 
                    
                    <button type="button" className="btn btn-primary mt-5 px-6 py-2" onClick={commitKvitering}><h4><b>Reserver bord</b></h4></button> : 
    
                    <button type="button" className="btn btn-secondary mt-5 px-5 py-2" disabled><h4><b>Reserver</b></h4></button>
                }
            </form>
        </div>
    );
}

export default Information;