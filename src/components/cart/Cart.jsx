import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;

    const { cart } = props; //option2

    // console.log(cart);

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        if(product.quantity === 0){
            product.quantity === 1;
        }

        // product.quantity = product.quantity || 1;
        total = product.price + total;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };

    const totalTax = total*7/100;

    const grandTotal = totalTax + totalShipping + total;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total.toFixed(3)}</p>
            <p>Total Shipping charge: ${totalShipping.toFixed(3)}</p>
            <p>Tax: ${totalTax.toFixed(3)}</p>
            <h6>Grand total: ${grandTotal.toFixed(3)}</h6>
        </div>
    );
};

export default Cart;