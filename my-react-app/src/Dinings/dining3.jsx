import React, { useState } from 'react';
import './Dining1.css';
import IMAGES from './cah6image';
import { useEffect } from 'react';

function dining3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const unitPrice = 14490;

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
          <h2>Pure Elegance Set</h2>
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
        <p>The melamine table top is moisture resistant, stain resistant and easy to keep clean.

          Extendable dining table with 1 extra leaf seats 4-6; makes it possible to adjust the table size according to need.

          The extra leaf can be stored within easy reach under the table top.

          1 extension leaf included.

          Can be easily extended by one person.

          The smart design means that the table top has no seams when you use the table without extending it.

          You can stack the chairs, so they take less space when you're not using them.</p>
        <h2>Measurements</h2>
        <p>Table:</p>
        <p>
          <li>Width: 77 cm (30 ¼")</li>
          <li>Height: 5 cm (2")</li>
          <li>Length: 123 cm (48 ¼")</li>
          <li>Weight: 18.60 kg (40 lb 16 oz)</li>
        </p>
        <p>Chair:</p>
        <p>
          <li>Width: 49 cm (19 ¼")</li>
          <li>Height: 8 cm (3")</li>
          <li>Length: 76 cm (29 ¾")</li>
          <li>Weight: 2.83 kg (6 lb 4 oz)</li>
        </p>
      </div>

    </>

  );
}
export default dining3;