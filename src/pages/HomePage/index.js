import React from "react";
import { useAuthState } from "../../context";
import { ContactsUI, NotLoggedInUI } from "../../layout";

const HomePage = () => {
  const {
    loginUser: { currentUser },
  } = useAuthState();
  return <>{currentUser ? <ContactsUI /> : <NotLoggedInUI />}</>;
};

export default HomePage;
