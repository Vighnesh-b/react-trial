import React, { useState } from 'react';
import './Sofa1.css';
import IMAGES from './cah2image';

function sofa1() {
  const unitPrice = 13000;

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
        <h2>Harmony Sofa</h2>
        <p>Serenity Sofas</p>
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
    <p>This soft sofa will have a long life since the seat cushions are filled with high resilience foam that gives good support for your body and quickly regains its original shape when you get up. The chaise longue has storage under the seat. The lid automatically stops in the open position so that you can easily pick out and put back the things that you are storing. You can complete with VIMLE headrest to extend the backrest of the sofa, so that you sit even more comfortably with a nice support for your neck.

This cover is made from Saxemara fabric in cotton and polyester. The needlecord corduroy is soft yet durable and has a modern, elegant look.

The cover is easy to keep clean since it is removable and machine washable.

You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.</p>
    <h2>Measurements</h2>
    <p>
    <li>Height including back cushions: 83 cm (32 5/8 ")</li> 
  <li>Height backrest: 68 cm (26 3/4 ")</li>
  <li>Depth chaise longue: 164 cm (64 5/8 ")</li>
  <li>Width: 322 cm (126 3/4 ")</li>
  <li>Depth: 98 cm (38 5/8 ")</li>
  <li>Seat depth, chaise longue: 124 cm (49 1/4 ")</li>
  <li>Free height under furniture: 6 cm (2 3/8 ")</li>
  <li>Armrest width: 15 cm (5 7/8 ")</li>
  <li>Armrest height: 68 cm (26 3/4 ")</li>
  <li>Seat width: 292 cm (115 ")</li>
  <li>Seat depth: 55 cm (21 5/8 ")</li>
  <li>Seat height: 48 cm (18 7/8 ")</li>


      
    </p>
    </div>
    
    </>
    
  );
}
export default sofa1;