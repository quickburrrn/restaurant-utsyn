import { Link } from "react-router-dom";
import TestButton from "../components/TestButton";


function landingPage() {
  return (
    <div className="container text-left">
      <div className="col">
        <p>
          Vi serverer en smakfull 2-rettersmeny på torsdager og en herlig lunsjtallerken m/ dessert på fredager
        </p>

        <h4 className="fw-bold">Åpningstider</h4>

        <p>
        Torsdag kl.12-14
        Fredag kl.11-13
        </p>

        <h4 className="fw-bold">Sted</h4>
        
        <p>Tangen 21, 1.etg</p>

        <h4 className="fw-bold">Pris</h4>
        
        <p>KR 125, - for hovedrett</p>
        <p>KR 35, - for dessert</p>
      </div>
      
      <div className="col p-5 ">
        <Link to={`dato`}>
          <TestButton color="primary">
            Velg dato
          </TestButton>
        </Link>
      </div>
    </div>
  );
};

export default landingPage;