import React, { useState } from 'react';
import './Sofa1.css';
import IMAGES from './cah2image';
import { useEffect } from 'react';
function sofa3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const unitPrice = 16999;

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
        <h2>UrbanScape Sofa</h2>
        <p>Metropolis Furnishings</p>
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
    <p>5 year guarantee. Read about the terms in the guarantee brochure.

A sofa-bed with small, neat dimensions which is easy to furnish with, even when space is limited.

The storage space under the seat has room for pillows and throws.

Readily converts into a bed.

You get an even surface to sleep on since the seat comes as a single piece.

Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up.

Back cushions filled with polyester fibres for soft comfort.</p>
<h2>Measurements</h2>
    <p>
    <li>Width: 220 cm (86 5/8 ")</li>
<li>Depth: 88 cm (34 5/8 ")</li>
<li>Height: 92 cm (36 1/4 ")</li>
<li>Seat depth: 57 cm (22 1/2 ")</li>
<li>Seat height: 48 cm (18 7/8 ")</li>
<li>Bed width: 145 cm (57 1/8 ")</li>
<li>Bed length: 183 cm (72 ")</li>
<li>Bed height: 35 cm (13 3/4 ")</li>
<li>Armrest height: 66 cm (25 ")</li>     
    </p>
    </div>
    
    </>
    
  );
}
export default sofa3;