import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css'; 

const Thankyou = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('product');

  return (
    <div className="thank-you-container">
      <h1>Congratulations</h1>
      <h1>Order Placed!</h1>
      <img src="https://res.cloudinary.com/dlngyh6jo/image/upload/v1729337013/plant_1_mdmcgw.png" alt="flower"/>
      <p>Thank you for your interest in {productName}!</p>
      <p>We appreciate your visit and hope to serve you again soon.</p>
      <Link className='navLink' to="/">
      <button className="button">CONTINUE SHOPING</button>
      </Link>
    </div>
  );
};

export default Thankyou;