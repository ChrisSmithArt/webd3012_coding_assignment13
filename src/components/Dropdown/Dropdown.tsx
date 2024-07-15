import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

export interface DropdownProps {
  label: string;
}

const StyledDropdown = styled.select<Partial<DropdownProps>>`
  background: ${(props) => (props.disabled ? "grey" : "papayawhip")};
  color: ${(props) => (props.disabled ? "light-grey" : "#BF4F74")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
  border-radius: 25px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const Dropdown = (React.FC<DropdownProps> = ({
  options,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledDropdown disabled={disabled} style={{ backgroundColor }}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
});

export default Dropdown;
