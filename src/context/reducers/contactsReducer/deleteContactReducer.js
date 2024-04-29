import {
  CLEAR_DELETE_CONTACT,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from "../../actionTypes";

const deleteContactReducer = (state, { type, payload }) => {
  switch (type) {
    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
          error: null,
          id: payload,
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.filter(
            (contact) => +contact.id !== +state.deleteContact.id
          ),
        },
        deleteContact: {
          loading: false,
          error: null,
          id: null,
        },
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: payload,
          id: null,
        },
      };
    case CLEAR_DELETE_CONTACT:
      return {
        ...state,
        deleteContact: {
          loading: false,
          error: null,
          id: null,
        },
      };
    default:
      return state;
  }
};

export default deleteContactReducer;
