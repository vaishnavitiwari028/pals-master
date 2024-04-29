import styled from "styled-components";
export const SearchContainer = styled.div`
  position: relative;
  width: 180px;
  margin: 10px 20px;
  margin-left: auto;
  @media (max-width: 650px) {
    margin-right: 30px;
  }
  @media (max-width: 500px) {
    width: 110px;
  }
`;
export const SearchLabel = styled.label`
  position: absolute;
  left: 1rem;
  i {
    color: grey;
  }
`;
export const SearchInput = styled.input`
  padding: 0.5rem 0rem;
  padding-left: 3rem;
  font-size: 1.7rem;
  width: 100%;
  border: none;
`;
