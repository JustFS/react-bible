import React from 'react';
import logo from '../../pages/home/logo.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="source">
        Ras le cul
      </div>

      <div className="footer-logo">
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;