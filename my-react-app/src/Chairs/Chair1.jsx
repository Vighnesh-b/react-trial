import React, { useState } from 'react';
import './Chair1.css'
import IMAGES from './cahimage';
import { useEffect } from 'react';

function Chair1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <h2>Cosmo Comfort Armchair</h2>
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
    <p>Clean lines and supportive comfort, regardless if you’re reading, socialising with friends or just relaxing for a moment.

Each armchair has a unique expression since the wooden frame is first stained in a dark-brown tone and then covered with clear lacquer that makes the wood’s natural grains visible.

High-resilience foam in the seat and back makes the armchair regain its shape when you stand up, and it’s complemented with zigzag springs in the seat and supportive fabric in the back for a firm comfort.

You will sit stable and steady for years to come since the frame is made of hardwearing solid wood. You also enjoy a relaxed sitting position thanks to the angled backrest.

The tall legs in solid wood make it easy to vacuum or reach things hiding under the armchair to avoid clutter.

The elegant, fixed cover has a perfect fit that will last over time. You can choose from different covers and find one that suits you and your home.</p>
    <h2>Measurements</h2>
    <p>
      <li>Height backrest: 46 cm (18 1/8 ")</li>

<li>Width: 64 cm (25 1/4 ")</li>

<li>Depth: 78 cm (30 3/4 ")</li>

<li>Height: 76 cm (29 7/8 ")</li>

<li>Free height under furniture: 22 cm (8 5/8 ")</li>

<li>Armrest height: 63 cm (24 3/4 ")</li>

<li>Seat width: 56 cm (22 ")</li>

<li>Seat depth: 50 cm (19 5/8 ")</li>

<li>Seat height: 45 cm (17 3/4 ")</li>
      
    </p>
    </div>
    
    </>
    
  );
}
export default Chair1;