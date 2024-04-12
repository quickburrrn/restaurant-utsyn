import React from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import TestButton from "../components/TestButton";

function Information()
{
    const navigate = useNavigate();

    const [navn, setNavn] = useOutletContext()[3];
    const [telefonnnumer, setTelefonnnumer] = useOutletContext()[4];
    const [email, setEmail] = useOutletContext()[5];
    const [extra, setExtra] = useOutletContext()[6];

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
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Fult navn</label>
                <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Skriv fult navn" onChange={handleSetName}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Telefonnnumer</label>
                <input type="email" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="12345678" onChange={handleSetTelefonnnumer}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email adresse</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Skriv email adresse" onChange={handleSetEmail}/>
                <small id="emailHelp" className="form-text text-muted">Email er valgfritt</small>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Ekstra informasjon onChange={handleSetExtra}</label>
                <textarea className="form-control" id="extra" rows="3"></textarea>
            </div>

            <Link to='../kvitering'><TestButton color="primary" buttonPressed={() => {}}>Reserver</TestButton></Link>
        </form>
    );
}

export default Information;