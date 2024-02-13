import React, { useState } from 'react';
import './Lamp1.css';
import IMAGES from './cah5image';
import { useEffect } from 'react';
function lamp1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const unitPrice = 1490;

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
          <h2>Armchair Reading Lamp </h2>
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
        <p>Provides a directed light that is great for reading.

          You can easily direct the light where you want it because the lamp arm is adjustable.</p>
        <h2>Measurements</h2>
        <p>
          <li>Max. Power: 20 W</li>
          <li>Height: 131 cm (52")</li>
          <li>Base Diameter: 25.5 cm (10")</li>
          <li>Shade Diameter: 15.5 cm (6")</li>
          <li>Cord Length: 200 cm (6' 7")</li>



        </p>
      </div>

    </>

  );
}
export default lamp1;