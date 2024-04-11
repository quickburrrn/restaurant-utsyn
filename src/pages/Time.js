import React, { useState } from "react";
import ListGroup from "../components/ListGroup";
import { useOutletContext, Link } from "react-router-dom";
import TestButton from "../components/TestButton";


function Time ()
{
    const [ankomst, setAnkomst] = useOutletContext()[1];

    const [timeActive, setTimeActive] = useState(false);

    const timeSelected = () =>
    {
        setAnkomst("12:00");
        setTimeActive(true);
    };

    return(
        <div>
            <ListGroup items={["12.00", "13.00", "14.00", "14.00", "15.00", "16.00"]} heading="Velg ankomst punkt" onSelectItem={timeSelected} />
            {timeActive ? 
                <Link to={`../tid`}><TestButton color="primary" >Veld Tidpunk</TestButton></Link>
                 : 
                <TestButton color="secondary disabled">Veld Tidpunk</TestButton>}
        </div>
    );
    
}

export default Time;