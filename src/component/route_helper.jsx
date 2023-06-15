import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Shopping } from "./pages/shopping/shopping";
import { Cart } from "./pages/cart/cart";

export default function Routehelper() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
