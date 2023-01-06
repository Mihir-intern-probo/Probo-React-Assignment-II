import React,{useState} from 'react'
import { useEffect } from 'react';
import { ItemState } from '../Context/ItemsProvider';
import { useNavigate } from "react-router";
import "./normal.css"

const PerItem = ({item}) => {
    const navigate=useNavigate();
    var count=0;
    const {items,setItems,setTotalCost}=ItemState();
    for(var i=0;i<items.length;i++){
        if(items[i].id===item.id){
            count=items[i].qty;
            break;
        }
    }
    const [qty,setQty]=useState(count);
    const addItem=()=>{
        if(qty+1>item.avalQty){
            alert("Out of stock");
            return;
        }
        for(var i=0;i<items.length;i++){
            if(items[i].id===item.id){
               var newItems=items;
                newItems[i].qty=qty+1;
                setItems(newItems);
                setQty(qty+1);
                return;
            }
        }
        items.push({id:item.id,qty:qty+1,price:item.itemPrice,itemName:item.itemName,img:item.img,avalQty:item.avalQty-qty});
        setQty(qty+1);
    }
    const removeItem=()=>{
        if(qty-1<0){
            alert("No items left");
            return;
        }
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
    }
    useEffect(()=>{
        var totalCost=0;
        items?.map((item)=>{
            totalCost+=item.qty*item.price;
        })
        setTotalCost(totalCost);
    },[navigate,items])
  return (
    <div style={{border:"2px solid black",margin:"10px", borderRadius:"10px",backgroundColor:"#e69e7a",width:"400px",paddingBottom:"20px"}}>
      <text style={{display:"block",textAlign: "center",fontSize:"30px",fontFamily: "inherit",fontWeight: "500"}}>{item.itemName}</text>
      <div style={{backgroundColor:"white",border:"2px solid black", marginLeft:"20px", marginRight:"20px", borderRadius:"20px",padding:"10px"}}>
      <text style={{display:"block",textAlign:"center"}}><img src={item.img} style={{borderRadius:"10px",border:"2px solid black"}}/></text>
        <text style={{display:"block",fontSize:"20px",fontFamily: "inherit",fontWeight: "500" }}>Item Price: ${item.itemPrice}</text>
        <text style={{display:"block",fontSize:"20px",fontFamily: "inherit",fontWeight: "500"}}>Remaining Quantity: {item.avalQty-qty}</text>
        <text style={{display:"block",fontSize:"20px",fontFamily: "inherit",fontWeight: "500"}}>Items Added: {qty}</text>
      </div>
      <div style={{marginLeft:"20px",marginTop:"10px"}}>
        <button className="button-20" onClick={addItem}>Add item</button>
        <button className="button-24" onClick={removeItem}>Remove item</button>
      </div>
    </div>
  )
}

export default PerItem
