import React from 'react';
import './Cartitem.css';
import { Divider } from '@fluentui/react-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decrementItemQuantity, incrementItemQuantity } from '../Redux/CartSlice';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PyT0OP5tTERlggvAqbpHtBuPZusPn80FOlyNSysYzE6fk4WtV4QL3UnM7KlADR9nbRdGrtVRcm6OeYspwrFwrAr00bxrUnFFo');

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

  const makePayment = async () => {
    const stripe = await stripePromise;

    const body = {
      products: items
    };

    const response = await fetch("http://localhost:5000/api/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.error("Failed to create checkout session");
      return;
    }

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  };


  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

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
              <Divider className="divider2" />
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
      <div className="total-price">
        <span>Total Price: ${totalPrice.toFixed(2)}</span>
      </div>
      <button className='Payment-checkout' onClick={makePayment}>Payment CheckOut</button>
    </div>
  );
};

export default Cartitem;
