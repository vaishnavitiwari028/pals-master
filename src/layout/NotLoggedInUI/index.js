import React from "react";
import { ReactComponent as HeroSvg } from "../../assets/undraw_people_search_wctu.svg";
import { Button, Linked } from "../../components/reusable-components";
import {
  NotLoggedInImage,
  NotLoggedInText,
  NotLoggedInWrapper,
} from "../../components/styled-compoents";

const NotLoggedInUI = () => {
  return (
    <NotLoggedInWrapper>
      <NotLoggedInText>
        <h2>Welcome To Pals, </h2>
        <h5>we keep your contacts safely in your access</h5>
        <Linked to="/signin">
          <Button width="55%" margin="3rem auto" padding="1rem 1.5rem">
            Get Started
          </Button>
        </Linked>
      </NotLoggedInText>
      <NotLoggedInImage>
        <HeroSvg style={{ width: "100%", height: "500px" }} />
      </NotLoggedInImage>
    </NotLoggedInWrapper>
  );
};

export default NotLoggedInUI;
