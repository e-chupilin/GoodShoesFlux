
import React, { Component, PropTypes } from 'react';
import globalStyles from '../res/css/style-cart.css';

export default class CartLarge extends Component {
  render() {
    return (
      <div className='main-cart'>
        <span className='main-my-cart' href='#'>
          My Cart :
          <span className='cartQuantity'>3  </span>
          item(s)
        </span>
        <table className='simple-little-table' cellSpacing={0}>
          <tbody><tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Glass</td>
              <td>1</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>2</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Tablet</td>
              <td>3</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Total price: </td>
              <td />
              <td>227 </td>
            </tr>
          </tbody></table>
      </div>
    )
  }
}
