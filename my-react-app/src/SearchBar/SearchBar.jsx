import React, { useState } from 'react';
import './SearchBar.css';
import '../styles/fonts.css';

function SearchBar(){
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const presetProducts = ['Chair', 'Sofa', 'Bedroom','Study','Lamps','Lighting','Dining Set'];
  
    const handleChange = (e) => {
      const newQuery = e.target.value;
      setQuery(newQuery);
      setShowDropdown(newQuery.length > 0);
    };
  
    const handleSelect = (product) => {
      setQuery(product);
      setShowDropdown(false);
    };
    const filteredProducts = presetProducts.filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        {showDropdown && (
          <div className="dropdown">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(product)}
              >
                {product}
              </div>
            ))}
          </div>
        )}
      </div>
  );
}

export default SearchBar;