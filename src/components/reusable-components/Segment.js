import React from "react";
import styled from "styled-components";

export const SegmentContainer = styled.div`
  box-sizing: border-box;
  border: 2px solid grey;
  width: 100%;
  font-size: 2rem;
  padding: 5px;
`;
export const SegmentText = styled.div`
  box-shadow: 3px 3px 3px grey, -3px -3px 3px grey;
  padding: 10px;
`;

const Segment = ({ children, ...otherProps }) => {
  return (
    <SegmentContainer {...otherProps}>
      <SegmentText>{children}</SegmentText>
    </SegmentContainer>
  );
};

export default Segment;
