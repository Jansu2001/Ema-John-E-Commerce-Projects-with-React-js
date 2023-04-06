import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ items,handleRemoveCart }) => {
    const { id,img, name, price, quantity } = items;

    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-details'>
                <div className=''>
                    <p className='title'>{name}</p>
                    <p>Price: <span className='orange'>${price}</span> </p>
                    <p>Quantity: <span className='orange'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={()=>handleRemoveCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;