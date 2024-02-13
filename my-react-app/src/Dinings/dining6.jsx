import React, { useState } from 'react';
import './Dining1.css';
import IMAGES from './cah6image';

function dining6() {
  const unitPrice = 36999;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c6_1,
    IMAGES.c6_2,
    IMAGES.c6_3
  ];

  function handleQuantityChange(e) {
    setQuantity(parseInt(e.target.value, 10));
  }

  const totalPrice = (quantity * unitPrice).toFixed(2);

  return (
    <>
      <br />
      <br />
      <div className="product-container">
        <div className="product-image">
          <div className="big-image"><img src={images[selectedImage]} alt="Furniture" /></div>
          <div className="image-gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ₹{index + 1}`}
                className={`thumbnail ₹{index === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h2>Mahogany Eclipse Set</h2>
          <p className="price">₹{unitPrice.toFixed(2)}</p>
          <div className="quantity-container">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <p className="total-price">Total Price: ₹{totalPrice}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="description">
        <h2>Product details</h2>
        <p>Every table is unique, with varying grain pattern and natural colour shifts that are part of the charm of wood.

          1 person can quickly and smoothly extend the table before the guests arrive.

          The smart design means that the table top has no seams when you use the table without extending it.

          The extra leaf can be stored within easy reach under the table top.

          The table legs are always in the corners of the table top even when the table is extended, so there is plenty of room for chairs under the table.</p>
        <h2>Measurements</h2>
        <p>Table:</p>
        <p>
          <li>Width: 81 cm (32")</li>
          <li>Height: 5 cm (1 ¾")</li>
          <li>Length: 124 cm (48 ¾")</li>
          <li>Weight: 19.53 kg (43 lb 1 oz)</li>
        </p>
        <p>Chair:</p>
        <p>
          <li>Width: 44 cm (17 ¼")</li>
          <li>Height: 15 cm (5 ¾")</li>
          <li>Length: 96 cm (37 ¾")</li>
          <li>Weight: 6.38 kg (14 lb 1 oz)</li>
          <li>Package(s): 6</li>
        </p>
      </div>

    </>

  );
}
export default dining6;