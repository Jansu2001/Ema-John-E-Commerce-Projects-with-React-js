import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;

    // addToCartBtn
    const addToCartBtn = props.addToCartBtn;
    return (
        <div className='product'>
            <img src={img} alt="image" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => addToCartBtn(props.product)} className='add-cart-btn'>
                Add to Cart

                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;