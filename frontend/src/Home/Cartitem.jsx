import React from 'react';
import './Cartitem.css';
import { Divider } from '@fluentui/react-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decrementItemQuantity, incrementItemQuantity } from '../Redux/CartSlice';

const Cartitem = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const incrementQuantity = (id) => {
    dispatch(incrementItemQuantity({ id, amount: 1 }));
  };

  const decrementQuantity = (id) => {
    dispatch(decrementItemQuantity({ id, amount: 1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      <Divider className="divider1" />
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map(product => (
          <div className="cartitem" key={product.id}>
            <div className="cart-img">
              <img src={product.url || '/default-image.jpg'} alt={product.name} />
            </div>
            <div className="cartpayment">
              <h3>{product.name}</h3>
              <Divider  className="divider2" />
              <div className="product">
                <div className="productprice">
                  <p>{product.description || 'No description available'}</p>
                  <p>Price: ${product.price}</p>
                </div>
                <div className="totalprice">
                  <p>Quantity: {product.quantity}</p>
                  <span>Total: ${product.price * product.quantity}</span>
                </div>
                <div className='quantity-controls'>
                  <button onClick={() => decrementQuantity(product.id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => incrementQuantity(product.id)}>+</button>
                </div>
                <div className="remove">
                  <button onClick={() => handleRemoveItem(product.id)}>Remove Item</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <Divider className="divider2" />
    </div>
  );
};

export default Cartitem;
