import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const RightMenuCategory = () => {
    return (
      <div className='product-category'>
        <div className='product-category-head'><p>Product Category</p></div>
        <ul>
          <li>
            <span>Low shoes ( )</span>
          </li>
          <li>
            <span>Boots ( )</span>
          </li>
          <li>
            <span>Sport ( )</span>
          </li>
        </ul>
      </div>
    )
  }
export default RightMenuCategory
