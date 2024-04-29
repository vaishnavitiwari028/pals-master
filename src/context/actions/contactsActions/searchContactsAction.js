import { SEARCH_CONTACTS } from "../../actionTypes";

const searchContactsAction = (searchText, dispatch) => {
  dispatch({ type: SEARCH_CONTACTS, payload: searchText });
};

export default searchContactsAction;
