import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";

function Kvitering()
{

    const [count, setCount] = useOutletContext()[0];

    return(
        <div>
            <h1>Reservasjonen er sendt</h1>
            <h3>{"Dato " + count}</h3>
        </div>
    );
}

export default Kvitering;