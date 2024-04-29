import { LOGOUT } from "../../actionTypes";

const logoutAction = (dispatch, history) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  history.push("/signin");
};

export default logoutAction;
