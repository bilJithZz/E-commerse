import React from 'react';
import './Nav.css';
import { CiUser } from 'react-icons/ci';
import { GiIndiaGate } from 'react-icons/gi';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MyContext} from '../useContext/AuthContext'
import { useContext } from 'react';
import { CiSearch } from "react-icons/ci";


const Nav = () => {

  const {value,username}=useContext(MyContext)
 
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className='navbar'>
      <div className='rightnav'>
        <Link className='link 1' to="/phone">
          <p>Phone</p>
        </Link>
        <Link className='link 2' to="/tab">
          <p>Tab</p>
        </Link>
        <Link className='link 3' to="/accessories">
          <p>Accessories</p>
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder='search here' />
        <CiSearch />
      </div>
      <Link className='link 4' to='/'>
        <div className='midnav'>
          Shopei
        </div>
      </Link>
      <div className="leftnav">
        <div className='user'>
          <CiUser />
          {value ? (
            <div className="nav-item">{username}</div>
          ) : (
            <Link className='link 6' to='/register'>
              <div className="nav-item">
                <p>Register</p>
              </div>
            </Link>
          )}
        </div>
        <div className="nav-item">
          <GiIndiaGate />
          <p>English</p>
        </div>
        <div>
          <Link className='link 7' to="/cart">
          <div  className='nav-item-store'>
            <span>{totalQuantity}</span>
            <IoCartOutline />
            <p>Store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


Nav.propTypes = {
 
};

export default Nav;
