import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
