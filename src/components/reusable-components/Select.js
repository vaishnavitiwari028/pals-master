import { useState } from "react";
import styled from "styled-components";
import { FormLabel, InputField } from "./FormInput";
export const SelectField = styled.select`
  outline: none;
  border: 1px solid;
  padding: 1rem;
  font-size: 2rem;
`;
const Select = ({
  label,
  display,
  onChange,
  error,
  message,
  options,
  editValue,
  ...props
}) => {
  const [firstRender, setFirstRender] = useState(true);

  return (
    <InputField error={error} message={message}>
      {label && <FormLabel>{label}</FormLabel>}
      <SelectField
        onChange={(e) => {
          setFirstRender(false);
          onChange(e);
        }}
        {...props}
      >
        {firstRender ? (
          <option> {editValue || display || "Choose"}</option>
        ) : null}
        {options.map(({ text, value }, index) => (
          <option key={"select" + index} value={value}>
            {text}
          </option>
        ))}
      </SelectField>
    </InputField>
  );
};

export default Select;
