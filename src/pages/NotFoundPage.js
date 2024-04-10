import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container text-center">
      <h1>Beklager det skjedde noe feil</h1>
      <h1><Link to="/">Trykk her</Link></h1>
    </div>
  );
}

export default NotFoundPage;
