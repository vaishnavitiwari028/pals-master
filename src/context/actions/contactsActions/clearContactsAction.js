import { CLEAR_CONTACTS } from "../../actionTypes";

const clearContactsAction = (dispatch) => {
  dispatch({ type: CLEAR_CONTACTS });
};

export default clearContactsAction;
