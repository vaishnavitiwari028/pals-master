import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Footer, Header } from "./components";
import { useAuthDispatch, useAuthState, useContactsState } from "./context";
import autoLoginAction from "./context/actions/authActions/autoLoginAction";
import { useSessionStorage } from "./custom-hooks";
import { RenderRoute, routes } from "./routes";

const App = () => {
  const {
    loginUser: { currentUser },
  } = useAuthState();
  const authDispatch = useAuthDispatch();
  const contactsState = useContactsState();
  const { data: userData, setData: setUserData } = useSessionStorage(
    "PALS",
    ""
  );
  const {
    data: storedContactsData,
    setData: setStoredContactsData,
  } = useSessionStorage("PALSDATA");

  useEffect(() => {
    if (userData) {
      autoLoginAction(authDispatch, userData);
    }
  }, []);

  useEffect(() => {
    setStoredContactsData(contactsState);
  }, [contactsState]);

  useEffect(() => {
    setUserData(currentUser);
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(
          ({ path, component: Component, needsAuth, title }, index) => (
            <Route key={index} exact path={path}>
              {needsAuth &&
              currentUser === null &&
              storedContactsData === null ? (
                <Redirect to="/signin" />
              ) : (
                <RenderRoute Component={Component} title={title} />
              )}
            </Route>
          )
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
