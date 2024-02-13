import React, { useState } from 'react';
import './Chair1.css'
import IMAGES from './cahimage';
import { useEffect } from 'react';
function Chair2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const unitPrice = 18999;

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
        <h2>Zenith Lounge Furnish Chair</h2>
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
    <p>This wing chair and footstool are the perfect combination when you want to stretch out, rest your feet and sit extra comfortably and relaxed.

You can easily move the footstool around to wherever you need it and use it as an extra seat, for example when you have friends visiting.

The wing chair has a high back which provides extra support for your neck, so that you can lean your head back when resting.

Round armrests, soft lines and an inviting upholstery give this wing chair a soft embracing feel.</p>
    <h2>Measurements</h2>
    <p>
    <li>Width: 74 cm (29 ¼ ")</li>

    <li>Height: 47 cm (18 ¼ ")</li>

    <li>Length: 105 cm (41 ¼ ")</li>

    <li>Weight: 29.60 kg (65 lb 4 oz)</li>

    <li>Package(s): 1</li>


      
    </p>
    </div>
    
    </>
    
  );
}
export default Chair2;