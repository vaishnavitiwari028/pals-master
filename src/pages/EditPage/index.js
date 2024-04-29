import React from "react";
import { useParams } from "react-router";
import { useContactsState } from "../../context";
import { EditContactUI } from "../../layout";

const EditPage = () => {
  const { editId } = useParams();
  const { contacts } = useContactsState();
  const isEditPossible = contacts.data.some(
    (contact) => +contact.id === +editId
  );
  return isEditPossible ? (
    <EditContactUI />
  ) : (
    <>contact you might want to edit does not exist or deleted</>
  );
};
export default EditPage;
