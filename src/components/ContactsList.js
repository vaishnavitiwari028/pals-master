import React from "react";
import ContactDetails from "./ContactDetails";
import { ContactsListContainer } from "./styled-compoents";

const ContactsList = ({ data }) => {
  return (
    <ContactsListContainer>
      {data?.length ? (
        data.map((item, i) => (
          <ContactDetails key={`contact_${i}`} item={item} />
        ))
      ) : (
        <div>No Contacts Yet</div>
      )}
    </ContactsListContainer>
  );
};

export default ContactsList;
