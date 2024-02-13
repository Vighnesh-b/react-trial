import React, { useState } from 'react';
import './Sofa1.css';
import IMAGES from './cah2image';

function sofa5() {
  const unitPrice = 15999;

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
      <h2>NovaForm Sofa</h2>
        <p>Stellar Seating Solutions</p>
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
    <p>This sofa converts quickly and easily into a spacious bed when you remove the back cushions and pull out the underframe.

Sofa, chaise longue and double bed in one.

Storage space under the chaise longue. The lid stays open so you can safely and easily take things in and out.

You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.</p>
    <h2>Measurements</h2>
    <p>
  <li>Depth: 151 cm (59 1/2 ")</li>
  <li>Bed width: 140 cm (55 1/8 ")</li>
  <li>Bed length: 204 cm (80 3/8 ")</li>
  <li>Height including back cushions: 86 cm (33 7/8 ")</li>
  <li>Height backrest: 66 cm (26 ")</li>
  <li>Width: 230 cm (90 1/2 ")</li>      
    </p>
    </div>
    
    </>
    
  );
}
export default sofa5;