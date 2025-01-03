import React, {useContext} from 'react';
import CartWidget from './CartWidget';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.PNG'; 
import { Link } from 'react-router-dom';
import {CartContext} from '../Features/ContextProvider';
import 'bootstrap-icons/font/bootstrap-icons.css';

const  Navbar = () => {
const {cart} = useContext(CartContext)
  return (
   
<nav class="navbar navbar-expand-lg bg-body-tertiary ms-auto">


  <div class="container-fluid ms-auto">
    <Link class="navbar-brand" to="/">
    <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        
    </Link>
    
    <button 
      className="navbar-toggler" 
      type="button"
       data-bs-toggle="collapse" 
       data-bs-target="#navbarNavDropdown" 
       aria-controls="navbarNavDropdown" 
       aria-expanded="false" 
       aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">
          Home
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Perros
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/alimentos">
                  Alimentos
              </Link>
              </li>
            <li><a class="dropdown-item" href="#">Juguetes</a></li>
            <li><a class="dropdown-item" href="#">Farmacia</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gatos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Promociones
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

 
  <Link to="/cart" 
    className='navbar-link fs-5 text-dark text-decoration-none ms-auto'>
      <CartWidget/>{cart.length}
    </Link>

</nav>




    )
}

export default Navbar;