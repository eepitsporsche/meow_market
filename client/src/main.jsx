import ReactDOM from 'react-dom/client'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './pages/Shop.jsx'
import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';

// import Subscription from './pages/Subscription.jsx';
// import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Account from './pages/Account';
import OrderHistory from './pages/OrderHistory';
// import Account from './pages/Account.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }, {
        path: '/shop',
        element: <Shop />
      }
      //  {
      //   path: '/success',
      //   element: <Success />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
