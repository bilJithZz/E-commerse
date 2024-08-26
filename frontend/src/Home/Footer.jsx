import React from 'react';
import './Footer.css';
import { Divider } from '@fluentui/react-components';

const Footer = () => {
  return (
    <div className='footer'>
      <p>FAQ</p>
      <p>SUPPORT</p>
      <p>ABOUT US</p>
      <p>CONTACT US</p>
      <p>CANCELLATIONS AND REFUND POLICY</p>
      <Divider className="divider" />
      <div className='year'>
      <p>ABOUT 2023</p>
      </div>
      
    </div>
  );
};

export default Footer;
