import Navbar from "../components/Navbar";
import { Link , useOutletContext} from "react-router-dom";
import { useState } from "react";
import TestButton  from "../components/TestButton";
import ListGroup from "../components/ListGroup";

function Persons ()
{
    const [personer, SetPersoner] = useOutletContext()[2];

    const [personActive, setPersonActive] = useState(false);

    const personSelected = (item) =>
    {
        SetPersoner(parseInt(item))
        setPersonActive(true)
    }

    return(
        <div>
            <ListGroup items={["2", "3", "4", "5", "6", "7", "8", "9", "10"]} heading="Velg Antall Personer" onSelectItem={personSelected} />
            {personActive ? 
                <Link to={`../informasjon`}><TestButton color="primary" >Velg Andtall Personer</TestButton></Link>
                 : 
                <TestButton color="secondary disabled">Velg Andtall Personer</TestButton>}
        </div>
    );
};

export default Persons;