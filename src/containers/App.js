import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import MenuContainer from '../containers/MenuContainer';
import RightMenuContainer from '../containers/RightMenuContainer';
import GoodsContainer from '../containers/GoodsContainer';
import Footer from '../components/Footer';


const App = () => (
   <div>
      <HeaderContainer/>
      <div className='main-horizontal-line' />
      <MenuContainer/>
      <RightMenuContainer/>
      <GoodsContainer/>
      <Footer/>
    </div>
)
export default App
