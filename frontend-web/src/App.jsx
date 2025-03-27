/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CartSidebar.css';
//import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <ProductList />
      </main>
      <Footer />
      <CartSidebar /> 
    </div>
  );
}

export default App; */

import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import './components/CartSidebar.css';

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      
      <Layout>
        <main className="main-content flex-grow-1">
          <ProductList />
          <ProductList />
        </main>
      </Layout>

      <Footer />
      <CartSidebar />
    </div>
  );
}

export default App;