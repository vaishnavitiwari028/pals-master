import React from "react";
import styled, { css } from "styled-components";
export const InputField = styled.div`
  width: 100%;
  input,
  select {
    box-sizing: border-box;
    outline: none;
    border: 1px solid;
    padding: 0.5rem;
    font-size: 2rem;
    width: 100%;
  }

  &::after {
    content: "";
    min-height: 2.5rem;
    display: block;
    width: 100%;
    font-size: 1.8rem;
    ${({ error }) =>
      error &&
      css`
    content:"${error}";
    color: red;
    `}
    ${({ message }) =>
      message &&
      css`
    content:"${message}";
    color: green;
    `}
  }
  .custom-checkbox {
    border: 1px solid grey;
    width: 15px;
    height: 15px;
    color: white;
    background-color: white;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 2.3rem;
  }
  input[type="checkbox"] {
    display: none;
  }

  input:checked + .custom-checkbox {
    background-color: blue;
  }
`;

export const FormLabel = styled.div`
  font-size: 2rem;
  max-width: 100%;
  display: inline;
`;

export const FormField = styled.span`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: ${({ type }) =>
    type === "row" || type === "checkbox" ? "row" : "column"};
`;

const FormInput = React.forwardRef(
  ({ label, error, message, ...props }, ref) => (
    <FormField type={props.type}>
      {label && (
        <FormLabel as="label" htmlFor={props.id || ""}>
          {label}
        </FormLabel>
      )}
      <InputField error={error} message={message}>
        <input ref={ref} {...props} />
        {props.type === "checkbox" && (
          <label htmlFor={props.id || ""} className="custom-checkbox">
            &#10004;
          </label>
        )}
      </InputField>
    </FormField>
  )
);

export default FormInput;
