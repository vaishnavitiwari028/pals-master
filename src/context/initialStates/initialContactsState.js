const initialContactsState = {
  contacts: {
    loading: false,
    data: [],
    error: null,
    isSearchActive: false,
    searchedData: [],
    loaded: false,
  },
  addContact: {
    loading: false,
    error: null,
  },
  deleteContact: {
    loading: false,
    error: null,
    id: null,
  },
  editContact: {
    loading: false,
    error: null,
    id: null,
  },
};

export default initialContactsState;
