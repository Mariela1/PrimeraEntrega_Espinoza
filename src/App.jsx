import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget';
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
          <Route path="/alimentos" element={<Products />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>
        
      </Router>
      <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
