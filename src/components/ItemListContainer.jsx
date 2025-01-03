import React from 'react';
import '../styles/ItemListContainer.css';
import alimento1 from '../assets/images/alimento1.PNG'; 
import alimento2 from '../assets/images/alimento2.PNG';
import alimento3 from '../assets/images/alimento3.PNG';
import alimento4 from '../assets/images/alimento4.PNG';
import alimento5 from '../assets/images/alimento5.PNG';
import alimento6 from '../assets/images/alimento6.PNG';     
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div id="alimentos" class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" >
      <img src={alimento1} class="card-img-top" alt="alimento1"/>
        <div class="card-body">
          <h5 class="card-title">Alimento 1</h5>
          <p class="card-text">Descripcion de alimento 1.</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Go to cart!</button>
        </div>
    </div>
    </div>
    <div class="col">
    <div class="card" >
      <img src={alimento2} class="card-img-top" alt="alimento2"/>
        <div class="card-body">
          <h5 class="card-title">Alimento 2</h5>
          <p class="card-text">Descripcion de alimento 2.</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Go to cart!</button>
        </div>
    </div>
    </div>
    <div class="col">
    <div class="card" >
      <img src={alimento3} class="card-img-top" alt="alimento3"/>
        <div class="card-body">
          <h5 class="card-title">Alimento 3</h5>
          <p class="card-text">Descripcion de alimento 3.</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Go to cart!</button>
        </div>
    </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div class="card" >
      <img src={alimento4} class="card-img-top" alt="alimento4"/>
        <div class="card-body">
          <h5 class="card-title">Alimento 4</h5>
          <p class="card-text">Descripcion de alimento 4.</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Go to cart!</button>
        </div>
    </div>
    </div>
    <div class="col">
    <div class="card" >
      <img src={alimento5} class="card-img-top" alt="alimento1"/>
        <div class="card-body">
          <h5 class="card-title">Alimento 5</h5>
          <p class="card-text">Descripcion de alimento 5.</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Go to cart!</button>
        </div>
    </div>
    </div>
    <div class="col">
    <div class="card" >
      <img src={alimento6} class="card-img-top" alt="alimento1"/>
        <div class="card-body">
          <h5 class="card-title">Alimento 6</h5>
          <p class="card-text">Descripcion de alimento 6.</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Go to cart!</button>
        </div>
    </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default ItemListContainer;
