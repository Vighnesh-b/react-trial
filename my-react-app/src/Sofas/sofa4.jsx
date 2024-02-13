import React, { useState } from 'react';
import './Sofa1.css';
import IMAGES from './cah2image';

function sofa4() {
  const unitPrice = 14999;

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
      <h2>TranquilTide Sofa</h2>
        <p>Zenith Designs</p>
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
    <p>Light, airy design with high legs and slim lines, yet still a great comfort thanks to the elastic weave in the bottom and high resilience foam in the seat cushions.

The sofa's sections can be used freestanding or combined in different ways to get a size and shape that suits you and your home.

If you need a larger sofa, you can add a section or two to your existing combination.

You can create your own perfect combination with the planning tool. Assemble, take apart and put together again until it’s just right.

The removable back cushions give your body support where needed. For example, place several behind your back for a more upright position or use them to make it comfortable when lying down and reading.

The depth of the sofa makes it perfect for relaxing or even taking a nice nap.

You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.

You can choose to use the sofa with or without armrests, depending on the expression you want to create.

The high legs make it easy to clean the floor under the sofa.

This cover is made of Fridtuna, a sturdy cotton and polyester fabric with a deep texture woven in different tones.

The cover is easy to keep clean since it can be machine washed and is easy to take off and put on again.</p>
    <h2>Measurements</h2>
    <p>
  <li>Width: 285 cm (112 1/4 ")</li>
  <li>Depth: 99 cm (39 ")</li>
  <li>Depth chaise longue: 151 cm (59 1/2 ")</li>
  <li>Seat depth: 70 cm (27 1/2 ")</li>
  <li>Seat depth, chaise longue: 122 cm (48 ")</li>
  <li>Height including back cushions: 83 cm (32 5/8 ")</li>
  <li>Height backrest: 69 cm (27 1/8 ")</li>
  <li>Seat height: 40 cm (15 3/4 ")</li>
  <li>Free height under furniture: 14 cm (5 1/2 ")</li>
  <li>Armrest width: 6 cm (2 3/8 ")</li>      
    </p>
    </div>
    
    </>
    
  );
}
export default sofa4;