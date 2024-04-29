import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

const ImageOptions = styled(FlexWrapper).attrs({ column: true })`
  position: relative;
  font-size: 2.5rem;
  background-color: rgba(255, 255, 255, 0.7);
`;

export default ImageOptions;
