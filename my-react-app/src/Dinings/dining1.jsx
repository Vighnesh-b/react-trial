import React, { useState } from 'react';
import './Dining1.css';
import IMAGES from './cah6image';

function dining1() {
  const unitPrice = 6590;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c1_1,
    IMAGES.c1_2,
    IMAGES.c1_3
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
          <h2>Harmony Dining Set</h2>
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
        <p>You can stack the chairs, so they take less space when you're not using them.</p>

        <p>Sturdy metal table frame and durable, smooth melamine tabletop.</p>
        <h2>Measurements</h2>
        <p>Table:</p>
        <p>          
          <li>Width: 72 cm (28 ¼")</li>
          <li>Height: 2 cm (¾")</li>
          <li>Length: 116 cm (45 ½")</li>
          <li>Weight: 9.00 kg (19 lb 13 oz)</li>
        </p>
        <p>Chair:</p>
        <p>
            <li>Width: 49 cm (19 ¼")</li>
            <li>Height: 8 cm (3")</li>
            <li>Length: 76 cm (29 ¾")</li>
            <li>Weight: 2.83 kg (6 lb 4 oz)</li>
            <li>Package(s): 4</li>
        </p>
      </div>

    </>

  );
}
export default dining1;