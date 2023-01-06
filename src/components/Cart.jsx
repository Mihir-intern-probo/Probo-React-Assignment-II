import React,{useEffect} from 'react'
import { ItemState } from '../Context/ItemsProvider'
import {Link} from "react-router-dom"
import CartItem from './CartItem';

const Cart = () => {
    const {items,totalCost} = ItemState();
  return (
    <div>
    <h1>Cart</h1>
    {items?.map((item)=>{return <CartItem id={item.id} item={item}/>})}
    <h3>Total Cost = {totalCost}</h3>
    <Link to="/"><button>back</button></Link>
    <button>Checkout</button>
    </div>
  )
}

export default Cart
