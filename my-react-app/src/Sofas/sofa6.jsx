import React, { useState } from 'react';
import './Sofa1.css';
import IMAGES from './cah2image';

function sofa6() {
  const unitPrice = 17999;

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
      <h2>Enigma Sofa</h2>
<p>Mystique Furnishings</p>
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
   <p>Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up.

Back cushions filled with polyester fibres for soft comfort.</p>
<p>
  <li>Height incl. headrest: 72 cm (28 3/8 ")</li>
  <li>Height including back cushions: 82 cm (32 1/4 ")</li>
  <li>Height backrest: 72 cm (28 3/8 ")</li>
  <li>Width: 201 cm (79 1/8 ")</li>
  <li>Depth: 91 cm (35 7/8 ")</li>
  <li>Free height under furniture: 15 cm (5 7/8 ")</li>
  <li>Armrest width: 18 cm (7 1/8 ")</li>
  <li>Armrest height: 60 cm (23 5/8 ")</li>
  <li>Seat width: 166 cm (65 3/8 ")</li>
  <li>Seat depth: 54 cm (21 1/4 ")</li>
  <li>Seat height: 48 cm (18 7/8 ")</li>
  <li>Height: 82 cm (32 1/4 ")</li>

      
    </p>
    </div>
    </>
    
  );
}
export default sofa6;