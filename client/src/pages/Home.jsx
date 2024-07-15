import ProductList from "../components/ProductList.jsx/index";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div>

      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
