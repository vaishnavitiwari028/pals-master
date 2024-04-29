import styled from "styled-components/macro";
import FlexWrapper from "./FlexWrapper";

const SliderWrapper = styled.div`
  overflow-y: hidden;
  .no-favourites-yet {
    margin: auto;
  }
  width: 70vw;
  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 680px) {
    width: 100vw;
  }
  display: flex;
  margin: 0 auto;
`;

const SliderContainer = styled(FlexWrapper).attrs({ align: "flex-start" })`
  overflow-y: auto;
  width: ${({ itemsCount }) => (itemsCount ? itemsCount * 200 + "px" : "100%")};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled(FlexWrapper).attrs({ column: true })`
  text-align: center;
  font-size: 2rem;
  width: 200px;
  margin: 0 1.2rem;
  transition: 0.6s ease transform;
  transform: ${({ num }) => (num ? `translateX(${300 * num}px)` : `none`)};
  @media (max-width: 680px) {
    margin: 0 5rem;
  }
  span {
    &:nth-of-type(1) {
      font-size: 1.5rem;
    }
    &:nth-of-type(2) {
      color: blue;
      font-size: 1.4rem;
    }
  }
`;

export { SliderWrapper, SliderContainer, SliderItem };
