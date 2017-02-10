import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userAuthActions';
import { userAuth }  from '../reducers/userAuth';


const HeaderContainer = ({ userAuth, onLogoutClicked }) => (
  <div>
     <Header
       userAuth = { userAuth }
       onLogoutClicked = { onLogoutClicked }>
     </Header>
  </div>
)


const mapStateToProps = state => ({
  userAuth: state.userAuth,
  goods: state.goods,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClicked: bindActionCreators(actions.logoutUser, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
