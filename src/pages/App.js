import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";
import TestButton from "../components/TestButton";
import Navbar from "../components/Navbar";
import { useState } from "react"
import { Link } from "react-router-dom"


function App() {

  const handleSelectItem = (item) => {}

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="container text-left">
      <Navbar />

      <div classNAme="container"></div>

      <p>
        Vi serverer en smakfull 2-rettersmeny på torsdager og en herlig lunsjtallerken m/ dessert på fredager
      </p>

      <h4>Åpningstider</h4>

      <p>
      Torsdag kl.12-14
      Fredag kl.11-13
      </p>

      <h4>Åpningstider</h4>
      <p>Tangen 21, 1.etg</p>

      <h4>Pris</h4>
      <p>KR 125, - for hovedrett</p>
      <p>KR 35, - for dessert</p>

      <TestButton className="container text-center" color="primary">
        Book bord
      </TestButton>

      {/*<ListGroup header="Hello world" items={["hello", "world"]} onSelectItem={handleSelectItem}/>*/}

      {/* <TestButton buttonPressed={() => setAlertVisibility(true)}> Dett er en smidig knapp</TestButton>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Hello <b>World</b>
      </Alert>} */}
      
      {/* <Link to="/meny">
        <TestButton color="primary">
            Gå til meny
        </TestButton>
      </Link> */}

    </div>
  );
}

export default App;