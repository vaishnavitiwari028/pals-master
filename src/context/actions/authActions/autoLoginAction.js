import { LOGIN_SUCCESS } from "../../actionTypes";
const autoLoginAction = (dispatch, data) => {
  dispatch({ type: LOGIN_SUCCESS, payload: data });
};

export default autoLoginAction;
