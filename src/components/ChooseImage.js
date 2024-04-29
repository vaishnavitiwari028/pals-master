import React from "react";
import useMediaQuery from "../custom-hooks/useMediaQuery";
import { Clickable } from "./reusable-components";
import { ChooseImageContainer } from "./styled-compoents";

const ChooseImage = ({ tempImageURL, chooseImage, removeImage }) => {
  const matches = useMediaQuery("(hover:hover)");
  return (
    <>
      <ChooseImageContainer column={true}>
        {tempImageURL ? <img src={tempImageURL} alt="contactimage" /> : null}
        {tempImageURL && matches ? (
          <div className="image_options">
            <Clickable icon="user-edit" onClick={chooseImage}>
              change
            </Clickable>
            <Clickable icon="user-times" onClick={removeImage}>
              remove
            </Clickable>
          </div>
        ) : (
          <Clickable column={true} icon="user-edit" onClick={chooseImage}>
            add photo
          </Clickable>
        )}
      </ChooseImageContainer>
      {!matches ? (
        <div className="image_options-below">
          {tempImageURL ? (
            <>
              <Clickable icon="user-edit" onClick={chooseImage}>
                change
              </Clickable>
              <Clickable icon="user-times" onClick={removeImage}>
                remove
              </Clickable>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default ChooseImage;
