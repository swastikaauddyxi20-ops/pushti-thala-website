import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutV3 from "./pages/CheckoutV3";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/checkout"
        element={<CheckoutV3 />}
      />

      <Route
        path="/success"
        element={<OrderSuccess />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
      path="/profile"
      element={<Profile />}
      />
    </Routes>
  );
}

export default App;