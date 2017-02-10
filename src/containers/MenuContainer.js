import Cart from '../components/Cart';
import MenuLogoText from '../components/MenuLogoText';
import MainMenu from '../components/MainMenu';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const MenuContainer = ({ isAuthenticated }) => (
  <div className='main'>
          <div className='logo-image' />
          <MenuLogoText/>
          <MainMenu
            isAuthenticated = { isAuthenticated }
          />
          
          { isAuthenticated && <Cart/> }

        </div>
)

MenuContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  {  }
)(MenuContainer)
