import React from 'react';
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {

    let totalPrice = 0;
    let shippingCharge = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        // product.quantity=product.quantity|| 1
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
        totalQuantity = totalQuantity + product.quantity;
    }
    // Tax
    const tax = totalPrice * 3 / 100;
    // Grand Total
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart-summary'>
            <h2 className='cart-title'>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {totalQuantity}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <p>Shipping Charge: ${shippingCharge.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                
                    <button onClick={handleClearCart} className='clear-cart'>
                        <span>Clear Cart</span>
                    <FontAwesomeIcon  icon={faTrashCan} />
                    </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;