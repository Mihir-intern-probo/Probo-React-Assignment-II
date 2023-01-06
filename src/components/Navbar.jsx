import React from "react";
import ShoppingCart from "./shoppingCart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "block",
        textAlign: "right",
        paddingRight: "1%",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "10px",
        marginTop: "5px",
        marginBottom: "5px",
        backgroundColor: "#f56e6f",
        border: "3px solid black",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <Link to="/cart">
        <img
          src={ShoppingCart}
          height="50px"
          width="50px"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "5px",
            border: "2px solid black",
          }}
          alt="Shopping Cart"
        />
      </Link>
    </div>
  );
};

export default Navbar;
