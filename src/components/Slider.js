import React, { useState } from "react";
import { Clickable, ImageThumb } from "./reusable-components";
import { SliderContainer, SliderItem, SliderWrapper } from "./styled-compoents";

const Slider = ({ data }) => {
  const [num, setNum] = useState(0);
  const scrollLeft = () => {
    if (num <= Math.floor(data.length / 5)) {
      setNum(num + 1);
    }
  };
  const scrollRight = () => {
    if (num >= Math.ceil((data.length * -1) / 5)) {
      setNum(num - 1);
    }
  };
  if (!data?.length) {
    return (
      <SliderWrapper>
        <div className="no-favourites-yet">No Favourites Yet</div>
      </SliderWrapper>
    );
  }
  return (
    <SliderWrapper>
      <Clickable
        margin="auto"
        icon="caret-left"
        iconSize="3x"
        onClick={scrollLeft}
      />
      <SliderContainer itemsCount={data.length}>
        {data.map(
          (
            {
              first_name,
              last_name,
              contact_picture,
              country_code,
              phone_number,
            },
            i
          ) => (
            <SliderItem key={`slider_${i}`} num={num}>
              <ImageThumb
                firstName={first_name}
                lastName={last_name}
                src={contact_picture}
              />
              <span>{first_name + " " + last_name}</span>
              <span>{country_code + " " + phone_number}</span>
            </SliderItem>
          )
        )}
      </SliderContainer>
      <Clickable
        margin="auto"
        icon="caret-right"
        iconSize="3x"
        onClick={scrollRight}
      />
    </SliderWrapper>
  );
};

export default Slider;
