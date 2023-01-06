import React, { useEffect } from "react";
import { ItemState } from "../Context/ItemsProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./normal.css";
const Cart = () => {
  const { items, totalCost } = ItemState();
  return (
    <div>
      <text
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "inherit",
          fontWeight: "500",
        }}
      >
        Cart
      </text>
      {items.length === 0 ? (
        <div>
        <text
          style={{
            display: "block",
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "inherit",
            fontWeight: "500",
          }}
        >
          No items in cart
        </text>
        <div style={{textAlign:"right",marginRight:"30%"}}>
        <Link to="/">
            <button className="button-20" style={{ margin: "10px" }}>
              back
            </button>
          </Link>
        </div>
        </div>
      ) : (
        <div
          style={{
            borderRadius: "30px",
            border: "3px solid black",
            backgroundColor: "#fae2a2",
            justifyContent: "space-around",
            marginLeft: "20%",
            marginRight: "20%",
            marginTop: "20px",
            padding: "5px",
          }}
        >
          {items?.map((item) => {
            return <CartItem id={item.id} item={item} />;
          })}
          <div style={{ textAlign: "right" }}>
            <text
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "inherit",
                fontWeight: "500",
              }}
            >
              Total Cost = {totalCost}
            </text>
            <Link to="/">
              <button className="button-20" style={{ margin: "10px" }}>
                back
              </button>
            </Link>
            <button className="button-37" style={{ margin: "10px" }}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
