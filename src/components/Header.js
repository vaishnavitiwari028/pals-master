import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState, useContactsDispatch } from "../context";
import { clearContactsAction, logoutAction } from "../context/actions";
import authClearAction from "../context/actions/authActions/authClearAction";
import { useSessionStorage } from "../custom-hooks";
import { Clickable } from "./reusable-components";
import SearchField from "./SearchField";
import { ContactsNav, HeaderContainer } from "./styled-compoents";

const Header = () => {
  const {
    loginUser: { currentUser },
  } = useAuthState();
  const authDispatch = useAuthDispatch();
  const contactsDispatch = useContactsDispatch();
  const { clearData: clearStoredUser } = useSessionStorage("PALS");
  const { clearData: clearStoredContactsData } = useSessionStorage("PALSDATA");
  const history = useHistory();
  const [showNav, setShowNav] = useState(false);

  const logout = () => {
    logoutAction(authDispatch, history);
    authClearAction(authDispatch);
    clearStoredUser();
    clearStoredContactsData();
    clearContactsAction(contactsDispatch);
  };
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <HeaderContainer showNav={showNav}>
      <Clickable className="logo" to="/">
        Pals
      </Clickable>
      {currentUser ? (
        <>
          <SearchField />
          <div onClick={toggleNav} className="hamburger-menu">
            &#9776;
          </div>
          {showNav ? (
            <ContactsNav
              showNav={showNav}
              setShowNav={setShowNav}
              className="contacts_nav"
            >
              <Clickable align="baseline" icon="plus" to="/create-contacts">
                Add Contact
              </Clickable>
              <Clickable
                align="baseline"
                icon="sign-out-alt"
                to="/"
                onClick={logout}
              >
                Log out
              </Clickable>
            </ContactsNav>
          ) : (
            <nav className="contacts_nav_desktop">
              <Clickable align="baseline" icon="plus" to="/create-contacts">
                Add Contact
              </Clickable>
              <Clickable
                align="baseline"
                icon="sign-out-alt"
                to="/"
                onClick={logout}
              >
                Log out
              </Clickable>
            </nav>
          )}
        </>
      ) : (
        <nav>
          <Clickable to="/signin">Log in</Clickable>
          <Clickable to="/register">Register</Clickable>
        </nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
