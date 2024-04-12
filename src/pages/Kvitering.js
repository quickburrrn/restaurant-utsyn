import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import InfoField from "../components/InfoField";

function Kvitering()
{

    const [count, setCount] = useOutletContext()[0];
    const List = ["Dato: ", "Ankomst: ", "Antall personer: ", "Navn: ", "Telefonnummer: ", "Email: "];

    const hello = useOutletContext().length;

    return(
        <div>
            <h1>Reservasjonen er sendt</h1>
            <ul className="list-group">
                {useOutletContext().map(([item, setItem], index) =>
                (
                    <li className="mb-2">
                        <h3>{List[index]}  {item}</h3>
                    </li>
                ))};
            </ul>
        </div>
    );
}

export default Kvitering;