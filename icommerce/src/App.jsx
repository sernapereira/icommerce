import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/NavBar";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
