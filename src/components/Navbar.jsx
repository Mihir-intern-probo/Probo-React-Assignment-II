import React from 'react'
import ShoppingCart from "./shoppingCart.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:"block" ,texAlign:"right"}}>
      <Link to="/cart"><img src={ShoppingCart} height="50px" width="50px"/></Link>
    </div>
  )
}

export default Navbar
