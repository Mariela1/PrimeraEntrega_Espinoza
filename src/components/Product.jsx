import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

    const navigate = useNavigate();

    const handleAddToCart = () => {
        // Aquí puedes manejar la lógica de agregar al carrito si es necesario
        console.log(`Producto agregado: ${product.nameProduct}`);
        navigate('/cart'); // Redirige al CartWidget
    };
    
    return (
        <div className="card h-100" style={{width: '18rem'}}>
  <img src={product.urlImage} className="card-img-top h-75" alt={product.nameProduct}/>
  <div class="card-body">
    <h4 class="card-title">{product.nameProduct}</h4>
    <h5 class="card-title">$ {product.price}</h5>
    <p class="card-text">
        {product.description}
    </p>
    <button className="btn btn-primary" onClick={handleAddToCart}>
        Add To Cart
    </button>
  </div>
</div>
    );
};

export default Product;