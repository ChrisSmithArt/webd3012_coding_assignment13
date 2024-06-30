import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";


const StyledButton = styled.button<Partial<ButtonProps>>`
  background: ${props => props.disabled? "grey" : "white"};
  color: ${props => props.disabled? "light-grey" : "#BF4F74"};
  cursor: ${props => props.disabled? "not-allowed" : "pointer"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  opacity:  ${props => props.disabled? "0.5" : "1.0"};
`;


const Button = React.FC<ButtonProps> = ({title, backgroundColor, disabled}) => {
  return (
    <StyledButton disabled={disabled} style={{ backgroundColor }}>
      {title}
    </StyledButton>
    );
};

export default Button;