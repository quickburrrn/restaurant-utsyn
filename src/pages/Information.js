import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import TestButton from "../components/TestButton";

function Information()
{
    return(
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Fult navn</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv fult navn"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Telefonnnumer</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="12345678"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email adresse</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Skriv email adresse"/>
                <small id="emailHelp" className="form-text text-muted">Email er valgfritt</small>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Ekstra informasjon</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <Link to={`../kvitering`}><TestButton color="primary" >Reserver</TestButton></Link>
        </form>
    );
}

export default Information;