import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItems = ({ product }) => {
    const { id, img, name, price, quantity, shipping } = product;
    return (
        <div className='review-Item'>
            <div className='cartItem'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='product-details'>
                    <h3>{name}</h3>
                    <p>Quantity:{quantity}</p>
                    <p> <small>price: {price}$</small></p>
                    <p><small>Shipping Charge: {shipping}$</small></p>
                </div>
            </div>
            <div>
                <button className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default ReviewItems;