import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItem/ReviewItems';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItems
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 ></Cart>
            </div>
        </div>
    );
};

export default Orders;