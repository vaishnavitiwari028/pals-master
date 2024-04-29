import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "../../actionTypes";

const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        currentUser: null,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
