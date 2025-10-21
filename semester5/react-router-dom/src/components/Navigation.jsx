import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacts</Link>
      <Link to="/about">About</Link>
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
}
