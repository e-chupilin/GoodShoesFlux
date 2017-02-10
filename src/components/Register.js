import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import styles from '../res/css/style-register.css';

class Register extends Component {
  render() {
    const { regErrorMessage } = this.props;
    return (
      <div className='wrapper-register'>
            <div className='register-header'>
              <div className='logo-image' />

              {!regErrorMessage &&
                <p>Register new user: </p>
              }

              { regErrorMessage &&
                <p>{ regErrorMessage}</p>
              }

            </div>
            <div className='input-data'>

              <div className='login'>
                <label>
                  Login
                  <input ref='login' type='text' />
                </label>
              </div>
              <div className='name'>
                <label>
                  Full Name
                  <input ref='name' type='text' />
                </label>
              </div>
              <div className='email'>
                <label>
                  Email
                  <input ref='email' type='text' />
                </label>
              </div>
              <div className='password'>
                <label>
                  Password
                  <input ref='password' type='password' />
                </label>
              </div>
              <div className='confpassword'>
                <label>
                  Conf. Password
                  <input ref='confpassword' type='password' />
                </label>
              </div>
              <div className='phone'>
                <label>
                  Tel. Number
                  <input ref='phone' type='text' />
                </label>
              </div>
              <div className='photo'>
                <label>
                  Foto link
                  <input ref='photo' type='text' />
                </label>
              </div>

              { /* <Link to={'/'}> */ }
                <div onClick={(event) => this.regClick(event)}  className='register-btn'>
                    Register
                </div>
              { /* </Link> */  }
            </div>

          </div>

    )}

    regClick(event) {
      const { onRegisterClick } = this.props;
      const regData = {
          login: this.refs.login.value.trim(),
          name: this.refs.name.value.trim(),
          email: this.refs.email.value.trim(),
          password: this.refs.password.value.trim(),
          confpassword: this.refs.confpassword.value.trim(),
          phone: this.refs.phone.value.trim(),
          foto: this.refs.photo.value.trim()
        }
  onRegisterClick(regData);
  }
}

Register.propTypes = {
  onRegisterClick: PropTypes.func.isRequired
}

export default Register
