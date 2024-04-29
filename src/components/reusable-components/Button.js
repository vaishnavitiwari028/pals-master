import styled from "styled-components";

const Button = styled.button`
  font-family: "IBM Plex Sans", sans-serif;
  border: none;
  background-color: salmon;
  border-radius: 10px;
  outline: none;
  color: white;
  font-size: 2.3rem;
  width: ${({ width }) => (width ? width : "100%")};
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  margin: ${({ margin }) => (margin ? margin : "")};
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover {
    background-color: lightsalmon;
  }
  &:disabled {
    cursor: auto;
    background-color: peachpuff;
  }
`;

export default Button;
