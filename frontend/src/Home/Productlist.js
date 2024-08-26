import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/ReduxSlice';
import './Productlist.css';
import { Link } from 'react-router-dom';

const Productlist = () => {
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

  return (
    <div className='productlist'>
    <h2>Top Product List</h2>
    <div className='productlist1'>
      {items.map((item,index) => (
        <Link to={`/product/${item.id}`} key={index} className="product-link">
          <div className='indproductlist'>
          <img src={item.url} alt="Product" />
          <div className='productname'>
            <span>{item.name}</span>
          Starting from <span> ${item.price}</span> 
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
};

export default Productlist;
