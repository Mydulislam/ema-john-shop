import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const [cart , setCart] = useState([])

    const handleAddToCart =(product)=>{
        //console.log(product)
        const newCart = [...cart , product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    >

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <p>Select Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;