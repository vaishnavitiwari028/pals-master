import axiosInstance from "../../../api/axios";
import { FIREBASE_IMAGE_REF, storage } from "../../../api/firebase";
import {
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from "../../actionTypes";

const createContactAction = async (dispatch, data, history) => {
  dispatch({ type: CREATE_CONTACT_LOADING });

  const saveToBackend = async (url = null) => {
    try {
      let res = await axiosInstance().post("/contacts/", {
        ...data,
        contact_picture: url,
      });

      if (res) {
        dispatch({ type: CREATE_CONTACT_SUCCESS, payload: res?.data });
        history.push("/");
      }
    } catch (err) {
      dispatch({ type: CREATE_CONTACT_FAILURE, payload: err?.message });
    }
  };

  if (data.contact_picture) {
    storage
      .ref(`${FIREBASE_IMAGE_REF}/${data.contact_picture.name}`)
      .put(data.contact_picture)
      .on(
        "state_changed",
        (snapshot) => {},
        async (err) => {},
        async () => {
          const fileUrl = await storage
            .ref(FIREBASE_IMAGE_REF)
            .child(data.contact_picture.name)
            .getDownloadURL();
          saveToBackend(fileUrl);
        }
      );
  } else {
    saveToBackend();
  }
};

export default createContactAction;
