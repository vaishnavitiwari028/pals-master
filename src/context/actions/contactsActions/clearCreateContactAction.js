import { CLEAR_CREATE_CONTACT } from "../../actionTypes";

const clearCreateContactAction = (dispatch) => {
  dispatch({ type: CLEAR_CREATE_CONTACT });
};

export default clearCreateContactAction;
