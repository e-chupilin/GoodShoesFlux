import Goods from '../components/Goods';
import Grid from '../components/Grid';
import Detail from '../components/Detail';
import HomeNext from '../components/HomeNext';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const GoodsContainer = (  ) => (
  <div className='left-content'>

        <div className='display-view'>
          <Grid/>
          <Detail/>
        </div>

        <div className='products'>
          <Goods/>
          <HomeNext/>
        </div>
  </div>
)

GoodsContainer.propTypes = {

}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  {  }
)(GoodsContainer)
