import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ padding: 30, display: "flex", justifyContent: "space-around" }}
    >
      <NavLink to={"/"}>Go to Shop</NavLink>
      <NavLink to={"/cart"}>Go to Cart</NavLink>
    </header>
  );
};

export default Header;
