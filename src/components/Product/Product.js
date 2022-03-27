import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Product = (props) => {
    const {name,img,price} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: {price}tk</p>
            </div>
            <button onClick={() =>props.ClicktoHandel(props.product)} className='button-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;