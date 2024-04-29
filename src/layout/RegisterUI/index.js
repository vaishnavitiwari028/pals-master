import React from "react";
import { RegisterForm, RegisterSuccess } from "../../components";
import { useAuthDispatch, useAuthState } from "../../context";
import { registerAction } from "../../context/actions";

const RegisterUI = () => {
  const authDispatch = useAuthDispatch();
  const { registerUser } = useAuthState();
  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    registerAction(formFields, authDispatch);
  };

  return (
    <div>
      {registerUser.data ? (
        <RegisterSuccess {...registerUser.data} />
      ) : (
        <RegisterForm onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default RegisterUI;
