import React, { useEffect } from "react";
import { ContactsList, Slider } from "../../components";
import { Heading } from "../../components/reusable-components";
import { FlexWrapper } from "../../components/styled-compoents";
import {
  useAuthState,
  useContactsDispatch,
  useContactsState,
} from "../../context";
import { clearContactsAction, getContactsAction } from "../../context/actions";

const ContactsUI = () => {
  const contactsState = useContactsState();
  const contactsDispatch = useContactsDispatch();
  const {
    loginUser: { currentUser },
  } = useAuthState();

  useEffect(() => {
    if (currentUser) {
      if (!currentUser === null) {
        clearContactsAction(contactsDispatch);
      }
      if (contactsState.contacts.loaded) return;
      getContactsAction(contactsDispatch);
    }
  }, [currentUser]);

  return contactsState.contacts.loading ? (
    <FlexWrapper height="100vh">
      <p>Loading... </p>
      <i className="fas fa-spinner fa-spin"></i>
    </FlexWrapper>
  ) : (
    <>
      {contactsState?.contacts?.isSearchActive ? (
        <ContactsList data={contactsState?.contacts?.searchedData} />
      ) : (
        <>
          <Heading>Starred</Heading>
          <Slider
            data={contactsState?.contacts?.data.filter(
              (item) => !!item.is_favorite
            )}
          />
          <Heading>ALL</Heading>
          <ContactsList data={contactsState?.contacts?.data} />
        </>
      )}
    </>
  );
};

export default ContactsUI;
