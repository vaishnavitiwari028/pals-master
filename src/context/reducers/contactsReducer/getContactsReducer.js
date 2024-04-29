import {
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from "../../actionTypes";

const createContactReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOADING:
      return { ...state, loading: true };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
        loaded: true,
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,
      };

    default:
      return state;
  }
};
export default createContactReducer;
