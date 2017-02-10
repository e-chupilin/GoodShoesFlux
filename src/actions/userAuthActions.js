import { browserHistory } from 'react-router';

import { NO_FOTO_URL } from '../const/urlsConstants'

import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../const/userAuthConstants';

import {
  LOGIN_EMPTY_ERROR, PASSWORD_EMPTY, LOGIN_OR_PASSWORD_ERROR,
  PASSWORD_ERROR, EMAIL_ERROR
} from '../const/userAuthError';

function requestRegister(regData) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    regData
  }
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    user
  }
}

function registerError(regErrorMessage) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    regErrorMessage: regErrorMessage
  }
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    errorMessage: message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
    errorMessage: ''
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    errorMessage: ''
  }
}

export const registerUser = regData => (dispatch) => {

  const checkEmail = (field) => {
    let regCheck = new RegExp('^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$');
    // return regCheck.test(field) ? true : false;
    return true;
  }

  console.log(`Try to register:
    ${ regData.login}-${regData.password}-${regData.foto} ...`);
  dispatch(requestRegister(regData));

  regData.foto = regData.foto.length === 0 ?  NO_FOTO_URL : regData.foto;

  if (regData.login.length === 0 ) dispatch(registerError(LOGIN_EMPTY_ERROR)); else
  if (!checkEmail(regData.email))  dispatch(registerError(EMAIL_ERROR)); else
  if ( (regData.password !== regData.confpassword) || (regData.password.length < 3) ||
      (regData.confpassword.lengt < 3)) dispatch(registerError(PASSWORD_ERROR)); else
      {
          const user =   {
          'login': regData.login,
          'role':'BUYER',
          'name': regData.name,
          'email': 'ded@ded.com',
          'phone': '+375921111111',
          'foto': regData.foto
        }; // TMP
        localStorage.setItem('user', user);
        browserHistory.push('/');
        dispatch(receiveRegister(user));
      }
}

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  localStorage.removeItem('user');
  dispatch(receiveLogout());
}



export const loginUser = creds => (dispatch) => {

  dispatch(requestLogin(creds));

   const error = (message) => {
      console.log(`error: ${ message }`);
      dispatch(loginError(message));
      browserHistory.push('/');
    }

    if (creds.username.length === 0 )  error(LOGIN_EMPTY_ERROR);
      else
        if (creds.password.length === 0)  error(PASSWORD_EMPTY);
        else {
          const user =   {
              'login': 'ded',
              'role':'buyer',
              'name': 'Ded Kamazi',
              'email': 'ded@ded.com',
              'phone': '+375921111111',
              'foto':  'http://funkyimg.com/i/2okD9.jpg'
            }; // TMP

          localStorage.setItem('user', user);
          dispatch(receiveLogin(user));
          console.log(`user: ${ user.login} enter ...`);
          browserHistory.push('/');
        }
  }
