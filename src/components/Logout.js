import React, { Component, PropTypes } from 'react'

const Logout = ({ dispath, onLogoutClicked }) => {
    return (
      <a onClick={ onLogoutClicked }>
        Logout
      </a>
    )
}

Logout.propTypes = {
  onLogoutClicked: PropTypes.func.isRequired
}

export default Logout
