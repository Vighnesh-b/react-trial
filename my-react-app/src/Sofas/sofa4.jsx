import React, { useState } from 'react';
import './Sofa1.css';
import IMAGES from './cah2image';

function sofa4() {
  const unitPrice = 18999;

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

  return (<>
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
        <h2>LuxeLounge Sofa</h2>
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
    <p>This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socialising with others.

Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere.

The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against.

You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.</p>
    <h2>Measurements</h2>
    <p>
    <li>Depth: 86 cm (33 7/8 ")</li>

    <li>Height: 99 cm (39 ")</li>

    <li>Seat depth: 54 cm (21 1/4 ")</li>

    <li>Seat height: 44 cm (17 3/8 ")</li>

    <li>Seat width: 54 cm (21 1/4 ")</li>

    <li>Width: 82 cm (32 1/4 ")</li>


      
    </p>
    </div>
    
    </>
    
  );
}
export default sofa4;