import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Orders.css'
const Orders = () => {
    const { product, paowaProductgulo } = useLoaderData();
    const [cart, setCart] = useState(paowaProductgulo);
    function deleteItem(id){
        const cartRemaining = cart.filter(product => product.id !== id);
        setCart(cartRemaining);
        removeFromDb(id)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-container">
                    {
                        cart.map(reviewCart =><ReviewProduct
                        key={reviewCart.id}
                        reviewCart = {reviewCart}
                        deleteItem = {deleteItem}
                        ></ReviewProduct>)
                    }
                </div>
                <div className="cart-container">
                    <div className="cart">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;