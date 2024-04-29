import React from "react";
import { render } from "react-dom";
import App from "./App";
import { AuthProvider, ContactsProvider } from "./context";
import GlobalStyles from "./GlobalStyles";

render(
  <AuthProvider>
    <ContactsProvider>
      <GlobalStyles />
      <App />
    </ContactsProvider>
  </AuthProvider>,
  document.getElementById("root")
);
