
import "./home.css";
import Shop from "./Shop"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="homeTitle">Where Every Purr-chase is Purr-fect!</h1>
      </div>
      <div className = "homeContainer1">
        <h2 className="homeH2">Everything Your Cat Needs, All in One Place</h2>
      
        <p>Shop our wide selection of pet supplies and accessories today!</p>

        <button><Link to="/shop" className="shopBtn">
              Shop Now
            </Link></button>
      </div>
      <div className= "homeContainer2">
        <h2 className="homeH2">Exclusive Deals Await You!</h2>
        <p>Subscribe now to save more.</p>
      <button><Link to="/subscription">Subscribe</Link></button>
      </div>

    </div>
  );
};

export default Home;
