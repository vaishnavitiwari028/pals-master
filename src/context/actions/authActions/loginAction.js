import axiosInstance from "../../../api/axios";
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "../../actionTypes";

const loginAction = async (dispatch, data, history) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const res = await axiosInstance().post("/auth/login", data);
    if (res) {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      history.push("/");
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err?.response?.data?.detail || err?.message,
    });
  }
};

export default loginAction;
