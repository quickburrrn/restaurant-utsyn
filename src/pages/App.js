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
    <div class="container text-center">
      <Navbar />

      <p>
        Vi serverer en smakfull 2-rettersmeny på torsdager og en herlig lunsjtallerken m/ dessert på fredager
      </p>
      
      <TestButton className="container-fluid" color="primary">
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