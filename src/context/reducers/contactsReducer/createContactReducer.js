import {
  CLEAR_CREATE_CONTACT,
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from "../../actionTypes";

const createContactReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        addContact: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: [...state.contacts.data, payload],
        },
        addContact: {
          loading: false,
          data: payload,
          error: null,
        },
      };
    case CREATE_CONTACT_FAILURE:
      return {
        ...state,
        addContact: {
          loading: false,
          data: null,
          error: payload,
        },
      };
    case CLEAR_CREATE_CONTACT:
      return {
        ...state,
        addContact: {
          loading: false,
          data: null,
          error: null,
        },
      };
    default:
      return state;
  }
};
export default createContactReducer;
