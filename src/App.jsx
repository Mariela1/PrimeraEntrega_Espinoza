import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
  <CartProvider>
        <Router>
          <Navbar />
          
        <Routes>
       
          <Route path="/" element={"Bienvenidos a Ramona pets store!"} />
          <Route path="/alimentos" element={<Products></Products >} />
          <Route path="/cart" element={<Cart ></Cart>} />
        </Routes>
        
      </Router>
      <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
