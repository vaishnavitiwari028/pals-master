import {
  CLEAR_EDIT_CONTACT,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from "../../actionTypes";

const editContactReducer = (state, { type, payload }) => {
  switch (type) {
    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        editContact: {
          ...state.editContact,
          loading: true,
          error: null,
          data: null,
          id: payload,
        },
      };
    case EDIT_CONTACT_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((contact) =>
            +contact.id === +state.editContact.id
              ? { ...contact, ...payload }
              : contact
          ),
        },
        editContact: {
          loading: false,
          error: null,
          id: null,
        },
      };
    }
    case EDIT_CONTACT_FAILURE:
      return {
        ...state,
        editContact: {
          ...state.editContact,
          loading: false,
          error: payload,
          id: null,
        },
      };
    case CLEAR_EDIT_CONTACT:
      return {
        ...state,
        editContact: {
          loading: false,
          error: null,
        },
      };
    default:
      return state;
  }
};

export default editContactReducer;
