import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import your CSS file

function Home() {
  useEffect(() => {
    // Add 'show' class to trigger animations when component mounts
    document.querySelector('.home-container').classList.add('show');
  }, []);

  return (
    <div className="home-container">
      <div className="background-animation"></div>
      <h1>Welcome to Our Website</h1>
      <p className="description">NETWORKING - BINARY MLM 🔥</p>
      <div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Home;
