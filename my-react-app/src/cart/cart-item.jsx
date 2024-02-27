import React, { useContext } from "react";
import {PRODUCTS} from "../../products";
import { ShopContext } from "../context/shop-context";
import {cartItem} from "./cart-item";


export const cart = () => {
  const {cartItem} = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItem[product.Id] !== 0){
            return <cartItem data={product} />;
          }
        })}
      </div>
    </div>
  )
}