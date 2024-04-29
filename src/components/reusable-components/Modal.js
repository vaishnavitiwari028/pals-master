import React from "react";
import ReactDOM from "react-dom";
import { useClickOutside } from "../../custom-hooks";
import { ModalBody, ModalContainer } from "../styled-compoents";

const Modal = ({ children, onClickOutside, ...props }) => {
  const elRef = useClickOutside({ callback: onClickOutside });
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalBody ref={elRef} {...props}>
        {children}
      </ModalBody>
    </ModalContainer>,
    document.querySelector("#modal")
  );
};

export default Modal;
