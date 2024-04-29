import { CLEAR_EDIT_CONTACT } from "../../actionTypes";

const clearEditContactAction = (dispatch) => {
  dispatch({ type: CLEAR_EDIT_CONTACT });
};

export default clearEditContactAction;
