import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalBody = styled(FlexWrapper).attrs({
  column: true,
})`
  background-color: white;
  box-sizing: border-box;
  width: 40%;
  min-width: 200px;
  height: 25%;
  margin: 200px auto;
  padding: 5%;
  font-size: 2rem;
  box-shadow: 2px 2px 2px beige, -2px 2px 2px beige;
  > * {
    margin-top: 20px;
  }
  button {
    font-size: 1.8rem;
  }
`;
export { ModalContainer, ModalBody };
