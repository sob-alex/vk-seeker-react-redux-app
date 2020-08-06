import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <h1>VK Seeker </h1>
      </div>
    </div>
  );
};

export default Header;
