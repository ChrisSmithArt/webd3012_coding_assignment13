import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";


const StyledLabel = styled.label<Partial<LabelProps>>`
  color: ${props => props.disabled? "light-grey" : "#BF4F74"};
  cursor: ${props => props.disabled? "not-allowed" : "pointer"};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  opacity:  ${props => props.disabled? "0.5" : "1.0"};
`;


const Label = React.FC<LabelProps> = ({title, backgroundColor, disabled}) => {
  return (
    <StyledLabel disabled={disabled} style={{ backgroundColor }}>
      {title}
    </StyledLabel>
    );
};

export default Label;