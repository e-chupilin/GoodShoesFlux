import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import configureStore from './store/configureStore';
import './res/css/style1024min.css';

// require("font-awesome-loader");

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import PageNotFound from './components/PageNotFound';
import LoginContainer from './containers/LoginContainer';
import UserProfileContainer from './containers/UserProfileContainer';
import RegisterContainer from './containers/RegisterContainer';
import Register from './components/Register';

const store=configureStore();
console.log('Clear localStorage ... ');
localStorage.clear();

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          </Route>
            <Route path='/login' component={ LoginContainer }/>
            <Route path='/register' component={ RegisterContainer }/>
            <Route path='/userprofile' component={ UserProfileContainer }/>
          </Router>
  </Provider>,
  document.getElementById('root')
)
