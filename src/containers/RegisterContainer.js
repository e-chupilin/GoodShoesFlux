import Register from '../components/Register';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/userAuthActions';

const RegisterContainer = ({ registerUser, regErrorMessage }) => (
  <div>
     <Register
        regErrorMessage = { regErrorMessage }
       onRegisterClick = { regData => registerUser(regData) }
     />
  </div>
)

RegisterContainer.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    regErrorMessage: state.userAuth.regErrorMessage
  }
}

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterContainer)
