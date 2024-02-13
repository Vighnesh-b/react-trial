import React, { useState } from 'react';
import './Dining1.css';
import IMAGES from './cah6image';

function dining4() {
  const unitPrice = 39990;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c4_1,
    IMAGES.c4_2,
    IMAGES.c4_3
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
          <h2>Metaluxe Timber Table</h2>
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
        <p>Acacia has a rich brown colour and distinctive grain pattern. It is highly durable, resistant to scratches and water, ideal for heavy-use. Acacia slightly darkens with age.</p>
        <h2>Measurements</h2>
        <p>
          <li>Length: 235 cm (92 1/2")</li>
          <li>Width: 100 cm (39 3/8")</li>
          <li>Height: 73 cm (28 3/4")</li>


        </p>
      </div>

    </>

  );
}
export default dining4;