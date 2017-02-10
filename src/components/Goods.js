import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Goods = () => {
    return (
      <div className='product'>
        <div className='product-head'>
          <a className='product-head-text' href='#'>Gentlemans Shoes</a>
        </div>
        <div className='product-body-wrapper'>
          <div className='product-body'>
            <div className='product-image'>
              <div className='product-price'>
                <p className='price'></p>
              </div>
            </div>
            <div className='product-keys'>
              <div className='add-key'>
                <p>ADD TO CART</p>
              </div>
              <div className='info-key'>
                <p>MORE INFO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Goods
