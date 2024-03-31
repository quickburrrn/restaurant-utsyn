import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="">
      <h1>Du er brukuelig</h1>
      <Link to="/">Trykk her</Link>
    </div>
  );
}

export default NotFoundPage;
