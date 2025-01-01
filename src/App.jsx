import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <div className="App">
  <CartProvider>
        <Router>
          <Navbar/>
        <Routes>
       
          <Route path="/" element={"Bienvenidos a Ramona pets store!"} />
          <Route path="/alimentos" element={<ItemListContainer  />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
