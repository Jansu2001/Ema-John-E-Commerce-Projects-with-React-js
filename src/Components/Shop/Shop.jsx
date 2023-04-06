import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../CartSummary/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // handleShowAll
    const [showAll, setShowAll] = useState(false)


    // Loading Data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        let savedCart = [];
        // Step 1: Get id of the added Product
        for (const id in storedCart) {
            // Step 2: Get Product From Products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // Step 3: Add Quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // Step 4: Add the added product to the saved cart
                savedCart.push(addedProduct)
            }
        }
        // Step 5: Set the cart
        setCart(savedCart);

    }, [products])


    // Add to Cart Button From Produc.jsx
    const addToCartBtn = (products) => {
        let newCart = []
        // const newCart=[...cart,products]
        const exists = cart.find(pd => pd.id === products.id);
        if (!exists) {
            products.quantity = 1;
            newCart = [...cart, products]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== products.id);
            newCart = [...remaining, exists];
        }


        setCart(newCart)
        addToDb(products.id)

    }

    // handleShowAll
    const handleShowAll = () => {
        setShowAll(true)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h3>Available Products: { products.length} </h3> */}
                {
                    products.slice(0, showAll ? 76 : 9).map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartBtn={addToCartBtn}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                ><Link to='/orders'>
                        <button className='review-and-proceed'>

                            <span className='review-proceed-span'>Review Cart</span>

                            <FontAwesomeIcon icon={ faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>

            {
                !showAll && (
                    <button onClick={handleShowAll} style={{ background: 'tomato' }} >Show All</button>
                )
            }
        </div>
    );
};

export default Shop;