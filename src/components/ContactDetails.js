import React from "react";
import { useContactsDispatch, useContactsState } from "../context";
import { editContactAction } from "../context/actions";
import { Clickable, ImageThumb, Modal } from "./reusable-components";
import { ConatctSection, ContactContainer } from "./styled-compoents";

const ContactDetails = ({
  item: {
    id,
    first_name,
    last_name,
    contact_picture,
    phone_number,
    is_favorite,
    country_code,
  },
}) => {
  const contactsDispatch = useContactsDispatch();
  const {
    editContact: { loading: isEditing },
  } = useContactsState();

  const editContact = (id, editedData) => {
    editContactAction(contactsDispatch, id, editedData);
  };

  return (
    <ContactContainer>
      {isEditing ? (
        <Modal>
          <span>
            <i className="fas fa-circle-notch fa-spin fa-lg"></i>
          </span>
        </Modal>
      ) : null}
      <ConatctSection>
        <ImageThumb
          firstName={first_name}
          lastName={last_name}
          src={contact_picture}
        />
        <Clickable>
          <span className="no-click"> {first_name + " " + last_name} </span>

          <Clickable
            icon="star"
            style={{ color: `${is_favorite ? "gold" : "grey"}` }}
            onClick={() => editContact(id, { is_favorite: !is_favorite })}
          />
        </Clickable>
        <span>{country_code + " " + phone_number}</span>
        <Clickable width="20px" icon="edit" to={`edit/${id}`} />
        <Clickable width="20px" icon="trash" to={`/delete/${id}`} />
      </ConatctSection>
    </ContactContainer>
  );
};

export default ContactDetails;
