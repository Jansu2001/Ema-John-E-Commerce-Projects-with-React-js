import React, { useState } from 'react';
import './Orders.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

import Cart from '../CartSummary/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)
    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(items => <ReviewItem
                        key={items.id}
                        items={items}
                        handleRemoveCart={handleRemoveCart}
                    ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                ><Link to='/checkout'>
                        <button className='review-and-proceed'>
                            <span className='review-proceed-span'>Proceed Chekout</span>
                            <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Orders;