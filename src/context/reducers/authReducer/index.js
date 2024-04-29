import {
  CLEAR_AUTH,
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../actionTypes";
import { initialAuthState } from "../../initialStates";
import loginReducer from "./loginReducers";
import registerReducer from "./registerReducer";

const authReducer = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        ...state,
        loginUser: loginReducer(state.loginUser, { type, payload }),
      };

    case REGISTER_LOADING:
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
      return {
        ...state,
        registerUser: registerReducer(state.registerUser, { type, payload }),
      };

    case LOGOUT:
      return {
        ...state,
        loginUser: { loading: false, currentUser: null, error: null },
      };
    case CLEAR_AUTH:
      return initialAuthState;

    default:
      return state;
  }
};
export default authReducer;
