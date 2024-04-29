import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "auto")};
  text-align: center;
  margin: auto;
  i.fa-spin {
    margin: 0 1rem;
  }
`;
export default FlexWrapper;
