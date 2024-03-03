import { CartItemModel as Cart } from "../models/cart_item.js";

const addToCart = async (req, res) => {
  try {
    const { userid, product, quantity } = req.body;

    let existingCart = await Cart.findOne({ userid });

    if (existingCart) {
      const existingProductIndex = existingCart.items.findIndex(
        (item) => item.product.toString() === product.toString()
      );

      if (existingProductIndex !== -1) {
        existingCart.items[existingProductIndex].quantity += quantity;

      } else {
        existingCart.items.push({ product, quantity });
      }

      existingCart = await existingCart.save();
      res.status(200).json(existingCart);
    } else {
      const newCartItem = new Cart({
        userid,
        items: [{ product, quantity }],
      });

      const savedCartItem = await newCartItem.save();
      res.status(201).json(savedCartItem);
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { addToCart };
