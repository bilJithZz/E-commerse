import React, { useState } from 'react';
import "./Tab.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Phone = () => {
    const [range, setRange] = useState(1000);
    const { items } = useSelector((state) => state.data);

  
    const filteredItems = items.filter((item) =>
        item.description.toLowerCase().includes("tab")
    );

    
    const filteredItemsByPrice = filteredItems.filter((item) =>
        item.price <= range
    );

    return (
        <div className='main'>
            <div className="left">
                <div className="check">
                    <h3>Categories</h3>
                    <div className="checkbox">
                        <input type="checkbox" id="ipad" />
                        <label htmlFor="ipad">iPad</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="realme" />
                        <label htmlFor="realme">Realme</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="mi" />
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
                {filteredItemsByPrice.map((item, index) => (
                    <div  key={index}>
                        <Link className='tab' to={`/product/${item.id}`}>
                        
                            <div className="image">
                                <img src={item.url} alt="Product" />
                            </div>
                            <div className="disc">
                                <h3>{item.gadegt}</h3>
                                <p>{item.detail}</p>
                                <span>Price: ${item.price}</span>
                            </div>
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Phone;
