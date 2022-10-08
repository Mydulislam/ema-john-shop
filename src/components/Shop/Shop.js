import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const products = useLoaderData()
    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    },[products])


    const [cart , setCart] = useState([])

    const handleAddToCart =(product)=>{
        let newCart = [];
        const exists = cart.find(myCart => myCart.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart , product]
        }
        else{
            const jeilaAgeThakiAce = cart.filter(myCart => myCart.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...jeilaAgeThakiAce, exists]
        }
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;