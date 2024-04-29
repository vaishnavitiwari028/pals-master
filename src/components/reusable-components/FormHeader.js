import styled from "styled-components";

const FormHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  color: dimgrey;
  border-bottom: 1px solid grey;
  margin-top: ${({ mt }) => (mt ? mt : "1rem")};
  margin-bottom: ${({ mb }) => (mb ? mb : "1rem")};
  position: relative;
  .put_at_end {
    position: absolute;
    right: 0;
    bottom: -0.5rem;
  }
`;

export default FormHeader;
