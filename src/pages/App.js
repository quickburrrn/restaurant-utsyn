import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";
import TestButton from "../components/TestButton";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link ,Outlet, useLoaderData} from "react-router-dom";
import  { Context } from "react-router-dom";
import axios from 'axios';

export async function loader(params) {
  const con = params;
  return con;
}

// const UserNameContext = React.createContext();

function App() {
  return (
    //<UserNameContext.Provider value="Adam"></>
    <div>
      <h1>{useLoaderData()+" hei"}</h1>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default App;