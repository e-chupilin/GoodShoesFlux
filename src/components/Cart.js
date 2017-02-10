import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

class Cart extends Component {
  render() {

    return (

      <div className='main-cart'>
        <span className='main-my-cart' >
          My Cart :
          <span className='cartQuantity' />
          item(s)
        </span>
        <span className='main-cart-total'>
          Total Price :
          <span className='totalPrice' />
        </span>
        </div>
    

    )}
}

{/*
  Cart.propTypes = {

}
*/}

export default Cart
