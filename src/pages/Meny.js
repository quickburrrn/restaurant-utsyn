import kukost from "../images/Kukost.jpg";

function Meny() {
  return (
    <div className="justify-content-center">
      <img src={kukost} className="img-fluid" alt="Bilde av den nydelige spiseplassen"/>
      <h1 className="display-2 justify-content-center text-secondary">Dette er vår meny</h1>
    </div>
  );
}

export default Meny;