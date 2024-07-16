import ProductList from "../components/ProductList.jsx/index";
import CategoryMenu from "../components/CategoryMenu/index";
import Cart from "../components/Cart/index";
import "./shop.css";

const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Shop;
