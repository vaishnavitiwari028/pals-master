import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { CreateContactForm } from "../../components";
import { CreateContactUIWrapper } from "../../components/styled-compoents";
import { useContactsDispatch, useContactsState } from "../../context";
import { editContactAction } from "../../context/actions";

const EditContactUI = () => {
  const contactsDispatch = useContactsDispatch();
  const contactsState = useContactsState();
  const { editId } = useParams();
  const history = useHistory();
  const editData = contactsState.contacts.data.find(
    (contact) => contact.id === +editId
  );

  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    editContactAction(contactsDispatch, editId, formFields, history);
  };

  return (
    <CreateContactUIWrapper>
      <CreateContactForm onSubmit={onSubmit} editData={editData} />
    </CreateContactUIWrapper>
  );
};

export default EditContactUI;
