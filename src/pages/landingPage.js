import { Link } from "react-router-dom";
import TestButton from "../components/TestButton";
import bilde1 from "../images/bilde1.jpeg";
import bilde2 from "../images/bilde2.jpeg";
import Forrett from "../images/Forrett.jpg";
import {Carousel} from "react-bootstrap";
import './styles.css'

function landingPage() {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={bilde1} alt="Bilde"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={bilde2} alt="Bilde"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src={Forrett} alt="Bilde"/>
          </Carousel.Item>
        </Carousel>
        <div className="carosel-text">
          <h1 className="display-1"><b>Restaurant utsyn</b></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus id nisi cursus fermentum. Integer quis massa non ante tincidunt euismod. Phasellus sed ex in velit sodales efficitur. Nullam dapibus dolor eget nisi tincidunt, vel ultricies purus varius. Maecenas auctor diam quis ligula feugiat tempor. Suspendisse potenti.</p>
          <button className="btn btn-primary mb-6"><h1 className="display-6">Reserver bord</h1></button>
        </div>
      </div>

      <div className="row cols-2 justify-content-center text-center">
        <div className="col">
          <h1 className="display-6">
            Kontakt
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus id nisi cursus fermentum. Integer quis massa non ante tincidunt euismod. Phasellus sed ex in velit sodales efficitur. Nullam dapibus dolor eget nisi tincidunt, vel ultricies purus varius.
          </p>
        </div>
        <div className="col">
          <h1 className="display-6">
            Åpningstider
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus id nisi cursus fermentum. Integer quis massa non ante tincidunt euismod. Phasellus sed ex in velit sodales efficitur. Nullam dapibus dolor eget nisi tincidunt, vel ultricies purus varius.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h1 className="display-3">Planlagt meny</h1>
      </div>

      <div className="text-center">
        <h1 className="display-3">
          Om resturant utsyn
        </h1>
      </div>

      <div className="text-center footer">
        <h1 className="display-6">
          Restaurant utsyn
        </h1>
        <p>
          Personvern
        </p>
        <p>
          Utviklet av Dennis, Andre, Sander
        </p>
      </div>

    </div>
  );
};

export default landingPage;