import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewProduct.css'
const ReviewProduct = ({ reviewCart,deleteItem }) => {
    const {id, name, img, quantity, price, } = reviewCart;
    return (
        <div className='review-area'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-info'>
                <div className="info">
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button onClick={()=>deleteItem(id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewProduct;