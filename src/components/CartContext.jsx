
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
  };

  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };
    
    // Lógica para manejar el carrito
    return (
      <CartContext.Provider value={{ cart, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
