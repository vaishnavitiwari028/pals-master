import React from "react";
import { Link } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context";
import authClearAction from "../context/actions/authActions/authClearAction";
import { useField } from "../custom-hooks";
import { serverSideUsernameValidate } from "../helpers/serverSideValidate";
import { validateEmail, validatePassword } from "../helpers/validations";
import { Button, FormHeader, FormInput, Segment } from "./reusable-components";
import { FormContainer } from "./styled-compoents";

const RegisterForm = ({ onSubmit }) => {
  const {
    registerUser: { loading, error },
  } = useAuthState();
  const authDispatch = useAuthDispatch();
  const {
    field: usernameField,
    onChange: usernameOnChange,
    meta: usernameMeta,
  } = useField({
    validateFn: (val) => {
      if (val.length < 4) return "at least 4 char needed";
      return serverSideUsernameValidate(val);
    },
    debounceTime: 1000,
  });

  const {
    field: firstnameField,
    onChange: firstnameOnChange,
    meta: firstnameMeta,
  } = useField({
    validateFn: (val) => (val.length < 2 ? "at least 2 char needed" : ""),
  });

  const {
    field: lastnameField,
    onChange: lastnameOnChange,
    meta: lastnameMeta,
  } = useField({
    validateFn: (val) => (val.length < 2 ? "at least 2 char needed" : ""),
  });

  const {
    field: emailField,
    onChange: emailOnChange,
    meta: emailMeta,
  } = useField({
    validateFn: (val) => {
      if (error?.email) return error?.email?.join("");
      if (validateEmail(val)) return validateEmail(val);
    },
    watchList: [error],
  });

  const {
    field: passwordField,
    onChange: passwordOnChange,
    meta: passwordMeta,
  } = useField({
    validateFn: validatePassword,
    debounceTime: 1000,
  });

  const allValid =
    usernameMeta.isValid &&
    firstnameMeta.isValid &&
    lastnameMeta.isValid &&
    emailMeta.isValid &&
    passwordMeta.isValid;

  return (
    <>
      <FormContainer
        onSubmit={(e) =>
          onSubmit(e)({
            ...usernameField,
            ...firstnameField,
            ...lastnameField,
            ...emailField,
            ...passwordField,
          })
        }
      >
        <FormHeader mb="2rem">Create New Account</FormHeader>
        <FormInput
          label="User Name"
          id="username"
          name="username"
          onChange={usernameOnChange}
          type="text"
          error={usernameMeta.error}
          message={usernameMeta.message || usernameMeta.checking}
        />
        <FormInput
          label="First Name"
          id="firstname"
          name="first_name"
          onChange={firstnameOnChange}
          type="text"
          error={firstnameMeta.error}
        />
        <FormInput
          label="Last Name"
          id="lastname"
          name="last_name"
          onChange={lastnameOnChange}
          type="text"
          error={lastnameMeta.error}
        />
        <FormInput
          label="Email"
          id="email"
          name="email"
          onChange={(e) => {
            authClearAction(authDispatch);
            emailOnChange(e);
          }}
          type="text"
          error={emailMeta.error}
        />
        <FormInput
          label="Password"
          id="password"
          name="password"
          onChange={passwordOnChange}
          type="text"
          error={passwordMeta.error}
          message={passwordMeta.message}
        />
        <Button disabled={!allValid || loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
        <Segment>
          Already have an account? <Link to="/signin">Log in </Link>
        </Segment>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
