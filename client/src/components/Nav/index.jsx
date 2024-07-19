import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../../public/images/meow logo.png";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="">
          <li className="">
            <Link to="/home">
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/shop">
              Shop
            </Link>
          </li>
          <li className="">
            <Link to="/account">
              Account
            </Link>
          </li>
          <li className="">
            <Link to="/subscription">
              Subscription
            </Link>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="">
          <li className="">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="">
      <div className="logo-container">
      <a href='/'>
      <img src={logo} alt="Meow Market Logo" className="logo-img" />
      </a>
      <a href='/'>
      <h1>
          Meow Market
      </h1>
      </a>
      </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
