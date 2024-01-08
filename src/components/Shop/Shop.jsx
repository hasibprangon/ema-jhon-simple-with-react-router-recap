import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step1: get id
        for (const id in storedCart) {
            
            //step2: get product by id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){

                //step3:add quantity
               const quantity = storedCart[id];
               addedProduct.quantity =  quantity;

            //Step4:add the added product to the saved cart
               savedCart.push(addedProduct);
            }
            console.log(addedProduct);
        }
        //step5: set the cart
        setCart(savedCart);
    }, [products])

    // useEffect(() => {
    //     // console.log('prodcts:',products);
    //     const storedCart = getShoppingCart();
    //     //step-1:get id
    //     for (const id in storedCart){
    //         // console.log(id);

    //         //step-2:get product by using id
    //         const addedProduct = products.find(product => product.id === id)
    //         // console.log(addedProduct);
    //         if(addedProduct){


    //         //step-3: get quantity of the product
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity;
    //         // addedProduct.quantity = quantity;

    //         console.log(addedProduct);
    //         }
    //     }
    // }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;