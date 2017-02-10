import Login from '../components/Login';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/userAuthActions';

const LoginContainer = ({ loginUser }) => (
  <div>
     <Login
       onLoginClick = { creds => loginUser(creds) }
     />
  </div>
)

LoginContainer.propTypes = {
  loginUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginContainer)
