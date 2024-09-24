

import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../Redux/CartSlice';
import { selectProductById } from '../Redux/ReduxSlice';
import './Detail.css';
import { Divider } from '@fluentui/react-components';
import { MyContext } from '../useContext/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const { value } = useContext(MyContext);
  const { productId } = useParams();
  const numericProductId = parseInt(productId, 10);
  const product = useSelector((state) => selectProductById(state, numericProductId));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); 

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    if (value) {
      dispatch(addItem({ ...product, quantity }));
      toast.success("Product added to cart");
      setQuantity(1); 
    } else {
      toast.error("You must log in to add items to the cart");
    }
  };

  return (
    <div className="product">
       <div className='product-img'>
<img src={product.url || '/default-image.jpg'} alt={product.name} className="product-image" />
</div> 
      <div className='product-details'>
        <h4>{product.detail}</h4>
        <div className="price">
          <span>{product.dumyprice}</span>
          <p>${product.price}</p>
        </div>
        <span>{product.detail}</span>
        <div className='addtocart'>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {/* <Divider className='divider' /> */}
          <div className="priceing">
            <div className="total-price">
              <span>Total Price</span>
            </div>
            <div className="tprice">
              <span>${product.price }</span>
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer position="top-right"/>
    </div>
  );
};

export default ProductDetails;