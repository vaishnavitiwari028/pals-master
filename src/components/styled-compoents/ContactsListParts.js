import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

const ContactsListContainer = styled(FlexWrapper).attrs({ column: true })`
  width: 90vw;
  margin: 0 auto;
`;
const ContactContainer = styled(FlexWrapper).attrs({ justify: "space-around" })`
  width: 100%;
  background-color: beige;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 5px 5px 5px beige;
  border-radius: 5px;
`;
const ConatctSection = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  & > :nth-child(2) {
    justify-self: start;
    .no-click {
      cursor: auto;
    }
  }
  @media (max-width: 600px) {
    & > :nth-child(1) {
      grid-column: 1/3;
      justify-self: start;
    }
    & > :nth-child(2) {
      grid-column: 1/3;
    }
    & > :nth-child(3) {
      grid-row: 1/-1;
      grid-column: 3/-1;
      justify-self: end;
    }
    & > :nth-child(4) {
      grid-column: 4/5;
    }
    & > :nth-child(5) {
      grid-column: 5/6;
    }
  }
`;

export { ContactsListContainer, ContactContainer, ConatctSection };
