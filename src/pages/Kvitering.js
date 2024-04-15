import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import InfoField from "../components/InfoField";

function Kvitering()
{

    const [count, setCount] = useOutletContext()[0];
    const List = ["Dato", "Antall personer", "Navn", "Telefonnummer", "Email"];

    const hello = useOutletContext().length;

    return(
        <div className="text-center">
            <h1 className="display-2">Reservasjonen er sendt</h1>
            <ul className="list-group">
                {useOutletContext().map(([item, setItem], index) =>
                (
                    <li className="mb-2">
                        <h3 className="display-5"><b>{List[index]}</b></h3>
                        <h3 className="display-6">{item}</h3>
                    </li>
                ))};
            </ul>
        </div>
    );
}

export default Kvitering;