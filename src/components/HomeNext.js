import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const HomeNext = () => {

    return (
      <div className='home-next'>
        <a className='text-home' href='#'>Home</a>
        <a className='text-next' href='#'>Nex Product »</a>
      </div>
    )
}
export default HomeNext
