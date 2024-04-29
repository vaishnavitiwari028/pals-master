import styled from "styled-components/macro";
import FlexWrapper from "./FlexWrapper";

const ChooseImageContainer = styled(FlexWrapper)`
  height: 250px;
  width: 220px;
  border: 4px solid grey;
  position: relative;
  margin: 0 auto;
  img {
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .image_options {
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 2.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0;
    transition: 0.2s ease opacity;
  }

  &:hover {
    .image_options {
      opacity: 1;
    }
  }

  & + .image_options-below {
    display: flex;
    justify-content: center;
    height: 20px;
    padding: 5px;
  }
`;

export default ChooseImageContainer;
