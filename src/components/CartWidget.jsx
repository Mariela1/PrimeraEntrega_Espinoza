import React from 'react';
import '../styles/CartWidget.css';
import { useCart } from './CartContext';

function CartWidget() {

    const { cart } = useCart();
    
    return (
            
            <div className="cart-widget">
            <i class="bi bi-basket3"></i>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                <p>Your cart is empty.</p>
                ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price}
                        </li>
                ))}
                </ul>
                )}
    </div>
    );
};

export default CartWidget;