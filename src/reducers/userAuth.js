import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_REQUEST
        } from '../const/userAuthConstants';

  const initialState = {
    isFetching: false,
    isAuthenticated:
        /* false, */
        /*   localStorage.clear(), */
         localStorage.getItem('user') ? true : false,
    errorMessage:''
  };

export default function userAuth(state = initialState, action) {

    switch (action.type) {

      case LOGIN_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      }

      case LOGIN_SUCCESS:
      return { ...state,
          isFetching: false,
          isAuthenticated: true,
          user: action.user
        }

      case LOGIN_FAILURE:
        return { ...state,
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.errorMessage
        }

      case LOGOUT_SUCCESS:
        return { ...state,
          isFetching: true,
          isAuthenticated: false,
          errorMessage: action.errorMessage
        }

        case REGISTER_REQUEST:
          return { ...state,
            isFetching: true,
            isAuthenticated: false
        }

        case REGISTER_SUCCESS:
          return { ...state,
            isFetching: false,
            isAuthenticated: true,
            user: action.user
        }

      case REGISTER_FAILURE:
        return { ...state,
          isFetching: false,
          isAuthenticated: false,
          regErrorMessage: action.regErrorMessage
        }

      default:
        return state
    }
  }
