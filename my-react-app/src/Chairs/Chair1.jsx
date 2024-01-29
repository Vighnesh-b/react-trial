import React, { useState } from 'react';
import './Chair1.css'
function Chair1() {
  const unitPrice = 499.99;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400/0000FF/808080?text=Image+2',
    'https://via.placeholder.com/400/008000/FFFFFF?text=Image+3',
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
        <img src={images[selectedImage]} alt="Furniture" />
        <div className="image-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2>Modern Sofa</h2>
        <p className="price">${unitPrice.toFixed(2)}</p>
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
        <p className="total-price">Total Price: ${totalPrice}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
    <div className="description">
    <h2>Product details</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis praesentium quam facere consequuntur adipisci, pariatur culpa placeat eum sequi expedita! Quibusdam, fuga quidem, assumenda eaque repellat molestiae est, saepe voluptas necessitatibus illo cupiditate ullam distinctio in? Nulla expedita laudantium non accusantium dolorum velit, mollitia fuga sit ullam iste obcaecati, autem temporibus ipsa, et dolore fugiat?</p>
    <h2>Measurements</h2>
    <p>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deleniti!</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, recusandae?</li>
    </p>
    </div>
    
    </>
    
  );
}
export default Chair1;