import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCart } from '../redux//slices/cartSlice'; 

export default function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const [cartAnimate, setCartAnimate] = useState(false);

  useEffect(() => {
    if (cartTotal > 0) {
      setCartAnimate(true);
      setTimeout(() => setCartAnimate(false), 300);
    }
  }, [cartTotal]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand fw-bold" to="/">UrbanShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><Link className="nav-link active" to="/">Men</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>
          <button 
            className={`btn ${cartTotal > 0 ? 'btn-warning' : 'btn-outline-dark'} position-relative ${cartAnimate ? 'shake' : ''}`} 
            onClick={() => dispatch(toggleCart())}
          >
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartTotal}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}