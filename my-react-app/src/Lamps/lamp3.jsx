import React, { useState } from 'react';
import './Lamp1.css';
import IMAGES from './cah5image';

function lamp3() {
  const unitPrice = 899;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c3_1,
    IMAGES.c3_2,
    IMAGES.c3_3
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
          <h2>Table lamp</h2>
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
        <p>Small and easy to place anywhere you want to bring some cosiness and mood light into your home.</p>
        <h2>Measurements</h2>
        <p>
          <li>Max. Power: 4.4 W (4 W)</li>
          <li>Shade Width: 13 cm (5")</li>
          <li>Height: 15 cm (6")</li>
          <li>Base Diameter: 8 cm (3")</li>
          <li>Cord Length: 200 cm (6' 7")</li>
        </p>
      </div>

    </>

  );
}
export default lamp3;