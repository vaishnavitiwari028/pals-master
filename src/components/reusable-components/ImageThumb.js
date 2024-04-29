import React, { memo } from "react";
import styled from "styled-components";

const StyledImageThumb = styled.div`
  height: 150px;
  width: 150px;
  @media (max-width: 650px) {
    height: 130px;
    width: 130px;
  }
  @media (max-width: 520px) {
    height: 100px;
    width: 100px;
  }
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ""};
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

const ImageThumb = ({ firstName, lastName, src }) => {
  const randomColor = () => {
    let colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "violet",
      "brown",
      "magenda",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {src ? (
        <StyledImageThumb>
          <img src={src} alt={`${firstName}_${lastName}_thumbnail`} />
        </StyledImageThumb>
      ) : (
        <StyledImageThumb backgroundColor={randomColor()}>
          {firstName[0].toUpperCase()}
          {lastName[0].toUpperCase()}
        </StyledImageThumb>
      )}
    </div>
  );
};

export default memo(ImageThumb);
