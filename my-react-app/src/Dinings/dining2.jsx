import React, { useState } from 'react';
import './Dining1.css';
import IMAGES from './cah6image';

function dining2() {
  const unitPrice = 9990;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c2_1,
    IMAGES.c2_2,
    IMAGES.c2_3
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
          <h2>Sapphire Bistro Set</h2>
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
        <p>Extendable dining table with 1 extra leaf seats 4-6; makes it possible to adjust the table size according to need.

          The smart design means that the table top has no seams when you use the table without extending it.

          The table legs follow along when you pull out the table and make more room for chairs around the table.

          The melamine table top is moisture resistant, stain resistant and easy to keep clean.

          The extra leaf can be stored within easy reach under the table top.

          Can be easily extended by one person. <b>Chairs not Included.</b></p>
        <h2>Measurements</h2>
        <p>
          <li>Min. Length: 120 cm (47 1/4")</li>
          <li>Max. Length: 180 cm (70 7/8")</li>
          <li>Width: 75 cm (29 1/2")</li>
          <li>Height: 73 cm (28 3/4")</li>
        </p>
      </div>

    </>

  );
}
export default dining2;