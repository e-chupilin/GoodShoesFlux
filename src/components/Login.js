import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import style from '../res/css/style-login.css';


class Login extends Component {
  render() {
     const { onLoginClick, errorMessage } = this.props
    return (
      <div>
      <div className='wrapper-login'>
        <div className='login'>
          <label>
            Login
            <input ref='username' type='text' />
          </label>
        </div>
        <div className='password'>
          <label>
            Password
            <input  ref='password' type='password' />
          </label>
        </div>
        <div className='check-wrapper'>
          <input className='checkbox' id='checkbox' type='checkbox' />
          <label htmlFor='checkbox'>Remember me</label>

        </div>
        { /* <Link to={'/'}> */ }
          <div onClick={(event) => this.handleClick(event)} className='login-btn' >
            Login
          </div>
        { /* </Link> */ }

        </div>
      </div>

    )}

    handleClick(event) {
    const { onLoginClick } = this.props;
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = {
        username: username.value.trim(),
        password: password.value.trim()
      }
    onLoginClick(creds);
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
}

export default Login
