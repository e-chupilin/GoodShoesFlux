
import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div onClick={this.googleClick} className='google' />
        <div className='text-footer'>
          <div onClick={this.copyrightClick}  className='copyright'>
            <span>Copyright 2011  </span>
            <a>Blogger Store v 1</a>
          </div>
          <div className='powered'>
            <span>POWERED BY BLOGGER. DESIGN BY</span>
            <a>JAVA TEMPLATES-BLOGGER TEMPLATES 2012</a>
          </div>
        </div>
      </footer>
    )
  }

  googleClick() {
  window.location.assign('http://google.com');
}

copyrightClick() {
window.location.assign('http://github.com');
}
}
