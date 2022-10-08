import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    let shiping = 0;
    let quantity = 0;
    for(let product of cart){
        quantity = quantity + product.quantity
        totalPrice = totalPrice + product.price * product.quantity;
        shiping = shiping + product.shipping;
    }
    let tax = parseFloat((totalPrice * 0.1).toFixed(2))
    const grandTotal = totalPrice + shiping + tax;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Select Items: {quantity}</p>
            <p>Total Pirce: ${totalPrice}</p>
            <p>Total Shiping: ${shiping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;