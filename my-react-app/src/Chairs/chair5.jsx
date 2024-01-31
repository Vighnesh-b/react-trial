import React, { useState } from 'react';
import './Chair1.css'
import IMAGES from './cahimage';

function Chair5() {
  const unitPrice = 15999;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c5_1,
    IMAGES.c5_2,
    IMAGES.c5_3
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
        <h2>Blissful Oasis Armchair</h2>
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
    <p>HAVBERG swivel armchair has an inviting and timeless design that feels cosy when you sit down to relax.

The swivel function allows for more flexibility, for example if you want to turn around and easily reach the remote control or a beverage and a snack.

The seat cushion is filled with polyurethane foam that provides a soft comfort and an embracing feeling.

Stretch out and rest your feet on the footstool to sit extra comfortably and relaxed.

The footstool also works as an extra seat which is practical when you have friends visiting.

The cover is woven in a strong fabric that creates a visible texture and makes it more hardwearing.

The swivel armchair and footstool are easy to assemble, so you can quickly sit down and relax.</p>
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
export default Chair5;