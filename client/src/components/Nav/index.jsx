import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

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
            <li className="">
            <Link to="/subscription">
              Subscription
            </Link>
          </li>
          {/* <li className="">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li> */}
           
          </li>
          <li className="">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
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
      <h1>
        <Link to="/">
          Welcome to Meow Market!!!
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
