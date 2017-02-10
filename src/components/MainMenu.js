import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const MainMenu = ({isAuthenticated}) => {
    return (
      <div className='main-menu'>

        { isAuthenticated &&
          <Link to={'userprofile'}>
            <div className='main-menu-text'>
              <span>User profile</span>
            </div>
        </Link>
        }

        { !isAuthenticated &&
          <Link to={'login'}>
            <div className='main-menu-text'>
              <span>Hi guest !</span>
            </div>
            </Link>
        }

        <div className='main-menu-delimiter' />
        <div className='main-menu-text'>
          <span>Product Category</span>
        </div>


        <div className='main-menu-delimiter' />
        <div className='main-menu-text'>
          <span>Look for SALE now !</span>
        </div>
        <div className='main-menu-delimiter' />

        { isAuthenticated &&
          <Link to={'/'}>
          <div className='main-menu-text'>
          <span>Buy now !</span>
        </div>
        <div className='main-menu-delimiter' />
        </Link>
      }

      </div>
    )
}

MainMenu.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default MainMenu
