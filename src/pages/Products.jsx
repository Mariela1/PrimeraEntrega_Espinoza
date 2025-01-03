import React, { useState} from 'react';
import productsData from '../data/products.json';
import Product from '../components/Product';

const Products = () => {
    const [products, setProducts] = useState(productsData.products)
    return (
        <div className="card mb-3 g-5" >
            <div class="card-body">
            <div class="container text-center mt-4">
                <div class="row row-cols-3 g-4">
                        {
                        products.map((p) => (
                            <div className="col-md-auto" key={p.id}>
                            <Product product ={p}/>
                            </div>
                        ))}
                    
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Products