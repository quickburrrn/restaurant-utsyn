import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
//import InfoField from "../components/InfoField";

function Kvitering()
{

    const [count, setCount] = useOutletContext()[0];


    return(
        <div>
            <h1>Reservasjonen er sendt</h1>
            <h3>{"Dato " + count}</h3>
            {/* <InfoField>Hello</InfoField> */}
        </div>
    );
}

export default Kvitering;