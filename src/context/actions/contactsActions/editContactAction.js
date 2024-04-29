import axiosInstance from "../../../api/axios";
import { FIREBASE_IMAGE_REF, storage } from "../../../api/firebase";
import {
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from "../../actionTypes";

const editContactAction = async (dispatch, id, editedData, history) => {
  dispatch({ type: EDIT_CONTACT_LOADING, payload: id });

  const saveEditedData = async (url) => {
    let res;
    try {
      url === undefined
        ? (res = await axiosInstance().patch(`/contacts/${id}`, editedData))
        : (res = await axiosInstance().patch(`/contacts/${id}`, {
            ...editedData,
            contact_picture: url,
          }));

      let data = await res.data;
      dispatch({ type: EDIT_CONTACT_SUCCESS, payload: data });
      if (history) {
        history.replace("/");
      }
    } catch (err) {
      dispatch({
        type: EDIT_CONTACT_FAILURE,
        payload: err.response?.data,
      });
    }
  };

  if (!editedData.contact_picture) {
    saveEditedData();
  } else {
    storage
      .ref(`${FIREBASE_IMAGE_REF}/${editedData.contact_picture.name}`)
      .put(editedData.contact_picture)
      .on(
        "state_changed",
        (snapshot) => {},
        async (err) => {},
        async () => {
          const fileUrl = await storage
            .ref(FIREBASE_IMAGE_REF)
            .child(editedData.contact_picture.name)
            .getDownloadURL();
          saveEditedData(fileUrl);
        }
      );
  }
};

export default editContactAction;
