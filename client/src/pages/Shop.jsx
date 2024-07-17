import ProductList from "../components/ProductList.jsx/index";
import CategoryMenu from "../components/CategoryMenu/index";
import Cart from "../components/Cart/index";
import "./shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
    <button className="buttonNotSure"><Link to="/recommendations">Not sure what's right for your cat? Try our Recommendations!!!</Link></button>
    <Cart />

      <ProductList />
    </div>
  );
};

export default Shop;

