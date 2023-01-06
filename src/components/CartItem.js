import React, { useState, useEffect } from "react";
import Add from "./add.png";
import Remove from "./minus.png";
import { ItemState } from "../Context/ItemsProvider";
import { useNavigate } from "react-router";
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
    console.log(newItems)
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
    console.log("Working")
  }, [items,navigate]);

  return (
    <div style={{ border: "1px solid black", display: "flex" }}>
      <div>
        <img src={item.img} />
      </div>
      <div style={{ display: "block",marginLeft:"50px"}}>
        <h1>{item.itemName}</h1>Number of Items : {item.qty}<br/>total price: {item.qty}x{item.price}{" "}
        = {item.qty * item.price}<br/>
        <div><img src={Add} height="20px" width="20px" onClick={addItem} />
        <img src={Remove} height="20px" width="20px" onClick={removeItem} /></div>
      </div>
    </div>
  );
};

export default CartItem;
