import axiosInstance from "../api/axios";

const MockUserRegister = (data) => ({
  username: data.username || "ANY",
  email: data.email || "",
  first_name: "xx",
  last_name: "xx",
  password: "xxxxxxxx",
});

export const serverSideUsernameValidate = async (dataToValidate) => {
  try {
    const data = await axiosInstance().post("/auth/register", {
      ...MockUserRegister({ username: dataToValidate }),
    });
    return data.response;
  } catch (err) {
    const errors = err?.response?.data;
    if (errors.username) return errors.username.join("");
  }
};
