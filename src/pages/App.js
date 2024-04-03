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
    <div>
      <Navbar />

      <ListGroup header="Hello world" items={["hello", "world"]} onSelectItem={handleSelectItem}/>
      <TestButton buttonPressed={() => setAlertVisibility(true)}> Dett er en smidig knapp</TestButton>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Hello <b>World</b>
      </Alert>}
      <Link to="/meny">
        <TestButton color="primary">
            Gå til meny
        </TestButton>
      </Link>

    </div>
  );
}

export default App;