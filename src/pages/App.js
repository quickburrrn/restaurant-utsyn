import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";
import TestButton from "../components/TestButton";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link ,Outlet, useLoaderData} from "react-router-dom";
import axios from 'axios';

function App() {
  const [count, setCount] = useState("00:00:00");
  
  const increment = () => setCount(1);

  return (
    <div>
      <Navbar />
      <div id="detail">
        <Outlet context={[count, setCount]}/>
      </div>
    </div>
  );
};

export default App;