import React, { useContext } from "react";
import PRODUCTS from "../Product_info/product_info";
import Product_grid from "../Product_info/Product_grid";
import { ShopContext } from "../context/shop-context";
import "./cart.css";

export const Cart = () => {
  const {cartItems} = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.Id] !== 0){
            return <cartItem data = {product} />;
          }
          
        })}
      </div>
    </div>
  )
}