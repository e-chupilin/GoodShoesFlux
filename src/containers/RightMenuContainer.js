import RightMenuCategory from '../components/RightMenuCategory';
import RightMenuLabels from '../components/RightMenuLabels';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const RightMenuContainer = (  ) => (
    <div className='right-lists'>
      <RightMenuCategory/>
      <RightMenuLabels/>
    </div>
)

RightMenuContainer.propTypes = {

}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  {  }
)(RightMenuContainer)
