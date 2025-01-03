import React , {useContext} from 'react';
import {CartContext} from '../Features/ContextProvider';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    
    const {dispatch} = useContext(CartContext);
    return (
        <div className="card h-100" style={{width: '18rem'}}>
  <img src={product.urlImage} className="card-img-top h-75" alt={product.nameProduct}/>
  <div class="card-body">
    <h4 class="card-title">{product.nameProduct}</h4>
    <h5 class="card-title">$ {product.price}</h5>
    <p class="card-text">
        {product.description}
    </p>
    
    <Link to="/cart" className="btn btn-primary" onClick={() => dispatch({type: "Add", product: product})}>
        Add To Cart
    </Link>
    
  </div>
</div>
    );
};

export default Product;