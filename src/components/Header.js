import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Logout from '../components/Logout';

import rss from '../res/images/rss.png';
// import rss from 'http://funkyimg.com/i/2o8v8.png';
import fb from '../res/images/facebook.png';
// import fb from 'http://funkyimg.com/i/2o8vf.png';
import tv from '../res/images/twitter.png';
// import tv from 'http://funkyimg.com/i/2o8vc.png';
import ln from '../res/images/linkedin.png';
// import tv from 'http://funkyimg.com/i/2o8vb.png';

const Header = ({ userAuth, onLoginClick, onLogoutClicked }) => {
  const { isAuthenticated, errorMessage, user } = userAuth;
    return (
      <header>
        <div className='header-menu'>
          {!isAuthenticated &&
            <div>
            <ul>
            <li>
              <Link to={'login'}>Sign in</Link>
              <div className='header-delimiter' />
            </li>
            <li>
              <Link to={'register'}>Sign up</Link>
            </li>
            <li>
              <span className='header-error'>&nbsp;&nbsp;{ errorMessage }</span>
            </li>
          </ul>
          </div>
          }

          {isAuthenticated &&
            <ul>
            <li>
                <Link to={'userprofile'}>Welcome: &nbsp; { user.login }</Link>
              <div className='header-delimiter' />
            </li>
            <li>
              <Logout onLogoutClicked={ onLogoutClicked } />
            </li>
          </ul>
        }

        </div>
        <div className='header-right'>
          <div className='header-searh'>
            <form className='searh' >
              <input name='input-searh' defaultValue='Search this site..' type='text' />
              <button name='button-searh' />
            </form>
          </div>
          <div className='header-social'>
            <ul>
              <li className='rss'><img src={rss} alt /></li>
              <li className='linkedin'><img src={ln} alt /></li>
              <li className='twitter'><img src={tv} alt /></li>
              <li className='facebook'><img src={fb} alt /></li>
            </ul>
          </div>
        </div>
      </header>
    )

}

Header.propTypes = {
  userAuth: PropTypes.shape({
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}).isRequired
}

export default Header
