import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from './Redux/ReduxSlice';
import Footer from './Home/Footer';
import Login from './Home/Login/Login';
import Register from './Home/Register/Register';
import Nav from './Home/Nav';
import Details from './Home/Details';
import Home from './Home';
import Cartitem from './Home/Cartitem';
import Phone from './Home/Inditem/Phone';
import Accessories from './Home/Inditem/Accessories';
import Tab from './Home/Inditem/Tab';
import './App.css';

const App = () => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn") 
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productId" element={<Details quantity={quantity} setQuantity={setQuantity} />} />
        <Route path="/cart" element={<Cartitem quantity={quantity} />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/tab" element={<Tab />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
