import UserProfile from '../components/UserProfile';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const UserProfileContainer = ({ user }) => (
  <div>
    <UserProfile user={ user } />
  </div>
)

UserProfile.propTypes = {
  user: PropTypes.shape({
  login: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired
}).isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.userAuth.user
  }
}

export default connect(
  mapStateToProps,
  { }
)(UserProfileContainer)
