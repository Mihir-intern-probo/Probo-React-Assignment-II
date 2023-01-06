import React,{useState} from 'react'
import { ItemState } from '../Context/ItemsProvider';

const PerItem = ({item}) => {
    var count=0;
    const {items,setItems}=ItemState();
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
        for(var i=0;i<items.length;i++){
          if(items[i].id===item.id){
            var newItems=items;
            newItems[i].qty=qty-1;
            setItems(newItems);
            setQty(qty-1);
            return;
          }
      }
      items.append({id:item.id,qty:qty-1,price:item.itemPrice,itemName:item.itemName,img:item.img,avalQty:item.avalQty-qty});
      setQty(qty-1);
    }
  return (
    <div style={{border:"1px solid black",margin:"10px"}}>
      <h2>Item Name: {item.itemName}</h2>
      <h3>Item Price: {item.itemPrice}</h3>
      <h4>Total Available Quantity: {item.avalQty-qty}</h4>
      <h5><img src={item.img}/></h5>
      <h6>Items Added: {qty}</h6>
      <button onClick={addItem}>Add item</button>
      <button onClick={removeItem}>Remove item</button>
    </div>
  )
}

export default PerItem
