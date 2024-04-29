import styled from "styled-components";

const CreateContactContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  & > * {
    &:first-child {
      grid-column: 1 /-1;
    }
  }
  @media (max-width: 580px) {
    display: block;
  }
`;

const CreateContactUIWrapper = styled.div`
  width: 70%;
  margin: auto;
`;

export { CreateContactUIWrapper, CreateContactContainer };
