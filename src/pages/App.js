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
  const [navn, setNavn] = useState("None None")
  const [telefonnnumer, setTelefonnnumer] = useState(12345678)
  const [email, setEmail] = useState("None")
  const [extra, setExtra] = useState("")

  return (
    <div>
      <div>
        <Outlet context={[[count, setCount], [personer, setPersoner], [navn, setNavn], [telefonnnumer, setTelefonnnumer], [email, setEmail], [extra, setExtra]]}/>
      </div>
    </div>
  );
};

export default App;