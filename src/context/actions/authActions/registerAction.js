import axiosInstance from "../../../api/axios";
import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../actionTypes";

const registerAction = async (data, dispatch, history) => {
  dispatch({ type: REGISTER_LOADING });
  console.log("start registering");

  try {
    const res = await axiosInstance().post("/auth/register", data);
    console.log(res);

    if (res) {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      // history.push("/signin");
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err?.response?.data || err?.message,
    });
  }
};

export default registerAction;
