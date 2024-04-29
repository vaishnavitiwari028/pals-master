import {
  CLEAR_CONTACTS,
  CLEAR_CREATE_CONTACT,
  CLEAR_DELETE_CONTACT,
  CLEAR_EDIT_CONTACT,
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  SEARCH_CONTACTS,
} from "../../actionTypes";
import initialContactsState from "../../initialStates/initialContactsState";
import createContactReducer from "./createContactReducer";
import deleteContactReducer from "./deleteContactReducer";
import editContactReducer from "./editContactReducer";
import getContactsReducer from "./getContactsReducer";

const contactsReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_CONTACT_LOADING:
    case CREATE_CONTACT_SUCCESS:
    case CREATE_CONTACT_FAILURE:
    case CLEAR_CREATE_CONTACT:
      return createContactReducer(state, { type, payload });

    case GET_CONTACTS_LOADING:
    case GET_CONTACTS_SUCCESS:
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        contacts: getContactsReducer(state.contacts, { type, payload }),
      };

    case DELETE_CONTACT_LOADING:
    case DELETE_CONTACT_SUCCESS:
    case DELETE_CONTACT_FAILURE:
    case CLEAR_DELETE_CONTACT:
      return deleteContactReducer(state, { type, payload });

    case EDIT_CONTACT_LOADING:
    case EDIT_CONTACT_SUCCESS:
    case EDIT_CONTACT_FAILURE:
    case CLEAR_EDIT_CONTACT:
      return editContactReducer(state, { type, payload });

    case CLEAR_CONTACTS:
      return initialContactsState;

    case SEARCH_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isSearchActive: !!payload.length ? true : false,
          searchedData: !!payload.length
            ? state.contacts.data.filter(
                ({ first_name, last_name }) =>
                  first_name.toLowerCase().includes(payload.toLowerCase()) ||
                  last_name.toLowerCase().includes(payload.toLowerCase())
              )
            : [],
        },
      };
    default:
      return state;
  }
};
export default contactsReducer;
