import React, { useState } from 'react';
import './Accessories.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Phone = () => {
  const [range, setRange] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { items } = useSelector((state) => state.data);

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setSelectedCategories(prev =>
      checked
        ? [...prev, id]
        : prev.filter(category => category !== id)
    );
  };

  const filteredItems = items.filter(item => {
    const withinRange = item.price <= range;
    const inCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    return item.description.toLowerCase().includes('accessorie') && withinRange && inCategory;
  });

  return (
    <div className='main'>
      <div className="left">
        <div className="check">
          <h3>Categories</h3>
          <div className="checkbox">
            <input
              type="checkbox"
              id="iphone"
              onChange={handleCategoryChange}
            />
            <label htmlFor="iphone">iPhone</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="nothing"
              onChange={handleCategoryChange}
            />
            <label htmlFor="nothing">Nothing</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="samsung"
              onChange={handleCategoryChange}
            />
            <label htmlFor="samsung">Samsung</label>
          </div>
        </div>
        <div className="range">
          <h3>Filtered by Price</h3>
          <div className="rangee">
            <span>0</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={range}
              onChange={e => setRange(e.target.value)}
            />
            <span>${range}</span>
          </div>
        </div>
      </div>
      <div className="right">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Link className="link" to={`/product/${item.id}`} key={item.id}>
              <div className='filterddata'>
                <div className="image">
                  <img src={item.url} alt={item.description} />
                </div>
                <div className='accessname'>
                  <h3>{item.gadegt}</h3>
                  <p>{item.detail}</p>
                  <h3>${item.price}</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No items found</div>
        )}
      </div>
    </div>
  );
};

export default Phone;
