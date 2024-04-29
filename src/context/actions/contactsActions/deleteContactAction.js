import axiosInstance from "../../../api/axios";
import {
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from "../../actionTypes";

const deleteContactAction = async (dispatch, id, history) => {
  try {
    dispatch({ type: DELETE_CONTACT_LOADING, payload: id });
    const res = await axiosInstance().delete(`/contacts/${id}`);
    if (res) {
      dispatch({ type: DELETE_CONTACT_SUCCESS, payload: res?.data });
      history.replace("/");
    }
  } catch (err) {
    dispatch({ type: DELETE_CONTACT_FAILURE, payload: err?.message });
  }
};

export default deleteContactAction;
