import React, { useEffect } from "react";
import { useAuthDispatch } from "../context";
import authClearAction from "../context/actions/authActions/authClearAction";
import { Clickable } from "./reusable-components";
import { FlexWrapper } from "./styled-compoents";

const RegisterSuccess = ({ first_name, last_name, username }) => {
  const authDispatch = useAuthDispatch();
  useEffect(() => {
    return () => {
      authClearAction(authDispatch);
    };
  }, []);
  return (
    <FlexWrapper column height="50vh" width="70vw">
      <div>Hello {" " + first_name + " " + last_name} !</div>
      <p>
        Your Registration with username {" " + username + " "} was successful.{" "}
        You can now login with your credentials
      </p>
      <Clickable to="/signin">Go To Login Page</Clickable>
    </FlexWrapper>
  );
};

export default RegisterSuccess;
