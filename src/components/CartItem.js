import React, { useState, useEffect } from "react";
import Add from "./add.png";
import Remove from "./minus.png";
import { ItemState } from "../Context/ItemsProvider";
import { useNavigate } from "react-router";
import "./normal.css";

const CartItem = ({ item }) => {
  const { items, setItems, setTotalCost } = ItemState();
  const navigate = useNavigate();

  const getTotalCost = () => {
    var totalCost = 0;
    items?.map((item) => {
      totalCost += item.qty * item.price;
    });
    setTotalCost(totalCost);
  };

  const [qty, setQty] = useState(0);
  
  const addItem = () => {
    if (qty + 1 > item.avalQty) {
      alert("Out of stock");
      return;
    }
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        var newItems = items;
        newItems[i].qty = qty + 1;
        setItems(newItems);
        getTotalCost();
        setQty(qty + 1);
        return;
      }
    }
    items.push({
      id: item.id,
      qty: qty + 1,
      price: item.itemPrice,
      itemName: item.itemName,
      img: item.img,
    });
    getTotalCost();
    setQty(qty + 1);
  };

  const removeItem = () => {
    var tempItems=items;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
            tempItems[i].qty=qty-1;
            setQty(qty - 1);
        }
      }
    var newItems=[];
    for (var i = 0; i < items.length; i++) {
        if (tempItems[i].qty>0) {
            newItems.push(tempItems[i])
        }
    }
    setItems(newItems);
    getTotalCost();
  };

  useEffect(() => {
    getTotalCost();
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === item.id) {
          setQty(items[i].qty);
          break;
        }
      }
  }, [items,navigate]);

  return (
    <div style={{border:"2px solid black",margin:"10px", borderRadius:"10px",backgroundColor:"#e69e7a",width:"auto",padding:"20px"}}>
      <div style={{display:"flex"}}>
      <div><img src={item.img} style={{borderRadius:"10px",border:"3px solid black"}}/></div>
      <div style={{ display: "block",marginLeft:"50px"}}>
        <text style={{display:"block",textAlign: "center",fontSize:"30px",fontFamily: "inherit",fontWeight: "500"}}>{item.itemName}</text>
        <text style={{display:"block",fontSize:"20px",fontFamily: "inherit",fontWeight: "500" }}>total price: {item.qty}x{item.price}= {item.qty * item.price}</text>
        <div>
          <button className="button-20" onClick={addItem}>+</button>
          <text style={{fontSize:"30px",fontFamily: "inherit",fontWeight: "500",marginLeft:"10px", marginRight:"10px"}}>{item.qty}</text>
          <button className="button-24" onClick={removeItem}>-</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
