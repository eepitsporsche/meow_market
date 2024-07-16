import ReactDOM from 'react-dom/client'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './pages/Shop.jsx'
import App from './App.jsx';
import Home from './pages/Home';
import Subscription from './pages/Subscription.jsx';
// import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Account from './pages/Account';
import OrderHistory from './pages/OrderHistory';
import Account from './pages/Account.jsx';
import ProductList from './components/ProductList.jsx/index.jsx';
import Cart from './components/Cart/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/orderHistory',
        element: <OrderHistory />
        },
        {
          path: '/account',
          element: <Account />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/subscription',
          element: <Subscription />
        },
         {
              path: '/products',
              element: <ProductList />
            },
            {
              path: '/cart',
              element: <Cart />
            }
    // {
    //     path: '/success',
    //     element: <Success />
    //   }, {
    //     path: '/orderHistory',
    //     element: <OrderHistory />
    //   }, {
    //     path: '/products/:id',
    //     element: <Detail />
    //   }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)