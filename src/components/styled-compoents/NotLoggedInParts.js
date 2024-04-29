import styled from "styled-components";

const NotLoggedInWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const NotLoggedInText = styled.div`
  grid-column: span 1;
  z-index: 2;
  text-align: center;
  font-size: 3rem;
  padding: 0.5em;

  h2,
  h5 {
    margin: 0;
    padding: 0;
  }

  h5 {
    color: grey;
    font-weight: 400;
  }
  @media (max-width: 650px) {
    grid-column: 1/-1;
    grid-row: 1/-1;

    h5 {
      color: #202020;
    }
  }
`;
const NotLoggedInImage = styled.div`
  grid-column: span 1;
  @media (max-width: 650px) {
    grid-column: 1/-1;
    grid-row: 1/-1;
    opacity: 0.5;
  }
`;

export { NotLoggedInWrapper, NotLoggedInText, NotLoggedInImage };
