import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context";
import authClearAction from "../context/actions/authActions/authClearAction";
import { useField } from "../custom-hooks";
import { Button, FormHeader, FormInput, Segment } from "./reusable-components";
import { FormContainer, LoginError } from "./styled-compoents";

const LoginForm = ({ onSubmit }) => {
  const {
    loginUser: { loading, error },
  } = useAuthState();
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    if (error) authClearAction(authDispatch);
  }, []);

  const {
    field: usernameField,
    onChange: usernameOnChange,
    meta: usernameMeta,
  } = useField({
    validateFn: (val) => val.length < 1,
  });

  const {
    field: passwordField,
    onChange: passwordOnChange,
    meta: passwordMeta,
  } = useField({
    validateFn: (val) => val.length < 1,
  });
  const allValid = usernameMeta.isValid && passwordMeta.isValid;
  return (
    <FormContainer
      onSubmit={(e) => onSubmit(e)({ ...usernameField, ...passwordField })}
      maxWidth="45%"
    >
      <FormHeader mb="0rem">Log in to Your Account</FormHeader>
      <LoginError>
        {error === "Invalid credentials"
          ? "Invalid email or password. try again"
          : null}
      </LoginError>
      <FormInput
        id="username"
        name="username"
        onChange={(e) => {
          if (error) authClearAction(authDispatch);
          usernameOnChange(e);
        }}
        type="text"
        label="User Name"
      />
      <FormInput
        id="password"
        name="password"
        onChange={(e) => {
          if (error) authClearAction(authDispatch);
          passwordOnChange(e);
        }}
        type="text"
        label="Password"
      />
      <Button disabled={!allValid || loading}>
        {loading ? "Loading..." : "Submit"}
      </Button>
      <Segment>
        Don't have an account ? <Link to="/register">Register</Link>
      </Segment>
    </FormContainer>
  );
};

export default LoginForm;
