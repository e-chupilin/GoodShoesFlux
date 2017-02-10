
import React, { Component, PropTypes } from 'react';
import globalStyles from '../res/css/style-product.css';

export default class GoodsInfo extends Component {
  render() {
    return (
      <div className='wrapper-product'>
        <div className='head'>
          <div className='foto-product'>
            <img src={'http://funkyimg.com/i/2o7uH.jpg'} ClassName='img-product' />
            <div className='star-five'>
              <ul>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
              </ul>
            </div>
            <div className='star-five-good'>
              <ul>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
                <li>
                  <span>☆</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='head-text-product'>
            <h1>Gentlemans Shoes</h1>
            <span>•</span><p className='first-name-product'>The best quality.</p>
            <span>•</span><p className='first-name-product'>Leather.</p>
            <span>•</span><p className='last-name-product'>Famous Brand.</p>
            <span>•</span><p className='login-product'>Wear warranty 2 years.</p>
            <div className='product-price-product'>
              <p className='product-price-product'>22.50</p>
            </div>
          </div>
        </div>
        <div className='main-text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='wrapper-btn'>
          <div className='save-btn'>
            <a className='text-login' >Buy now !</a>
          </div>
          <div className='cancel-btn'>
            <a className='text-login'>In cart</a>
          </div>
        </div>
      </div>
    )
  }
}
