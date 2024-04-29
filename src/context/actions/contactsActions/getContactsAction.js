import axiosInstance from "../../../api/axios";
import {
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from "../../actionTypes";

const getContactsAction = async (dispatch) => {
  try {
    dispatch({ type: GET_CONTACTS_LOADING });

    const res = await axiosInstance().get("/contacts/");
    if (res) {
      dispatch({ type: GET_CONTACTS_SUCCESS, payload: res?.data });
    }
  } catch (err) {
    dispatch({ type: GET_CONTACTS_FAILURE, payload: err?.message });
  }
};

export default getContactsAction;
