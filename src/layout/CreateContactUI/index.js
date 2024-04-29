import React from "react";
import { useHistory } from "react-router-dom";
import { CreateContactForm } from "../../components";
import { CreateContactUIWrapper } from "../../components/styled-compoents";
import { useContactsDispatch } from "../../context";
import { createContactAction } from "../../context/actions";

const CreateContactUI = () => {
  const contactsDispatch = useContactsDispatch();
  const history = useHistory();

  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    createContactAction(contactsDispatch, formFields, history);
  };
  return (
    <CreateContactUIWrapper>
      <CreateContactForm onSubmit={onSubmit} />
    </CreateContactUIWrapper>
  );
};

export default CreateContactUI;
