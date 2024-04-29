import { CLEAR_DELETE_CONTACT } from "../../actionTypes";
const clearDeleteContactAction = (dispatch) => {
  dispatch({ type: CLEAR_DELETE_CONTACT });
};

export default clearDeleteContactAction;
