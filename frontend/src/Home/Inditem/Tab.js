import React, { useState } from 'react';
import "./Tab.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Phone = () => {
    const [range, setRange] = useState(1000);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const { items } = useSelector((state) => state.data);

    // Filter by category and price range
    const filteredItems = items
        .filter((item) => {
            // Check if item matches any selected category
            const isInCategory = selectedCategory.length === 0 || selectedCategory.includes(item.category);
            return isInCategory && item.description.toLowerCase().includes("tab") && item.price <= range;
        });

    // Handler for checkbox change
    const handleCategoryChange = (category) => (e) => {
        setSelectedCategory(prevState =>
            e.target.checked
                ? [...prevState, category]
                : prevState.filter(cat => cat !== category)
        );
    };

    return (
        <div className='main'>
            <div className="left">
                <div className="check">
                    <h3>Categories</h3>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            id="ipad" 
                            onChange={handleCategoryChange('iPad')}
                        />
                        <label htmlFor="ipad">iPad</label>
                    </div>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            id="realme" 
                            onChange={handleCategoryChange('Realme')}
                        />
                        <label htmlFor="realme">Realme</label>
                    </div>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            id="mi" 
                            onChange={handleCategoryChange('MI')}
                        />
                        <label htmlFor="mi">MI</label>
                    </div>
                </div>
                <div className="range">
                    <h3>Filter by Price</h3>
                    <div>
                        <div className="rangee">
                            <span>0</span>
                            <input
                                type="range"
                                min="0"
                                max="1000" 
                                value={range}
                                onChange={(e) => setRange(Number(e.target.value))}
                            />
                            <span>${range}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div key={item.id}>
                            <Link className='tab' to={`/product/${item.id}`}>
                                <div className="image">
                                    <img src={item.url} alt="Product" />
                                </div>
                                <div className="disc">
                                    <h3>{item.name}</h3> {/* Ensure this is the correct field */}
                                    <p>{item.detail}</p>
                                    <span>Price: ${item.price}</span>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div><h1>No items found</h1></div>
                )}
            </div>
        </div>
    );
};

export default Phone;

