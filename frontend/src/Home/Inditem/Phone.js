import "./Phone.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/ReduxSlice';
import { Link } from 'react-router-dom';

const Phone = () => {
  const [range, setRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Filter items by category and price range
  const filteredItems = items
    .filter(item => {
      // Check if item belongs to any selected category
      const isInCategory = selectedCategory.length === 0 || selectedCategory.includes(item.category);
      return isInCategory && item.price <= range;
    });

  return (
    <div className='main'>
      <div className="left">
        <div className="check">
          <h3>Categories</h3>
          <div className="checkbox">
            <input 
              type="checkbox" 
              id="mobile" 
              onChange={(e) => setSelectedCategory(e.target.checked ? [...selectedCategory, 'mobile'] : selectedCategory.filter(cat => cat !== 'mobile'))}
            />
            <label htmlFor="mobile">iPhone</label>
          </div>
          <div className="checkbox">
            <input 
              type="checkbox" 
              id="nothing" 
              onChange={(e) => setSelectedCategory(e.target.checked ? [...selectedCategory, 'Nothing'] : selectedCategory.filter(cat => cat !== 'Nothing'))}
            />
            <label htmlFor="nothing">Nothing</label>
          </div>
          <div className="checkbox">
            <input 
              type="checkbox" 
              id="samsung" 
              onChange={(e) => setSelectedCategory(e.target.checked ? [...selectedCategory, 'Samsung'] : selectedCategory.filter(cat => cat !== 'Samsung'))}
            />
            <label htmlFor="samsung">Samsung</label>
          </div>
        </div>
        <div className="range">
          <h3>Filtered by Price</h3>
          <div>
            <div className="rangee">
              <span>0</span>
              <input 
                type="range" 
                min="0" 
                max="1000" 
                value={range} 
                onChange={e => setRange(Number(e.target.value))}
              />
              <span>${range}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Link className="phonelink" to={`/product/${item.id}`} key={item.id}>
              <div className="listitem">
                <div className="image">
                  <img src={item.url} alt="img" />
                </div>
                <div className="disc">
                  <h3>{item.name}</h3> {/* Assuming `item.name` is the correct field */}
                  <p>{item.detail}</p>
                  <h3>Price: ${item.price}</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div><h1>Item not found</h1></div>
        )}
      </div>
    </div>
  );
};

export default Phone;
