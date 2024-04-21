import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";
import TestButton from "../components/TestButton";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link ,Outlet, useLoaderData} from "react-router-dom";
import axios from 'axios';

function App() {
  const [count, setCount] = useState("00:00:00");
  //const [ankomst, setAnkomst] = useState("00:00");
  const [personer, setPersoner] = useState(0)
  const [navn, setNavn] = useState("")
  const [telefonnnumer, setTelefonnnumer] = useState(0)
  const [email, setEmail] = useState("")
  const [extra, setExtra] = useState("")
  const [etternavn, setEtternavn] = useState('')

  return (
    <div>
      <div>
        <Outlet context={[[count, setCount], [personer, setPersoner], [navn, setNavn], [telefonnnumer, setTelefonnnumer], [email, setEmail], [extra, setExtra], [etternavn, setEtternavn]]}/>
      </div>
    </div>
  );
};

export default App;