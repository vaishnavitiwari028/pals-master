import { CLEAR_AUTH } from "../../actionTypes";
const authClearAction = (dispatch) => {
  dispatch({ type: CLEAR_AUTH });
};

export default authClearAction;
