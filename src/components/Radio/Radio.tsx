import React from "react";
import styled from "styled-components";
import { RadioProps } from "./Radio.types";

export interface RadioProps {
  label: string;
}

const StyledRadio = styled.label<Partial<RadioProps>>`
  background: ${props => props.disabled? "grey" : "papayawhip"};
  color: ${props => props.disabled? "light-grey" : "#BF4F74"};
  cursor: ${props => props.disabled? "not-allowed" : "pointer"};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
  border-radius: 25px;
  opacity:  ${props => props.disabled? "0.5" : "1.0"};
`;


const Radio = React.FC<RadioProps> = ({title, backgroundColor, disabled}) => {
  return <StyledRadio disabled={disabled} style={{ backgroundColor }}>
        <input type="radio" name={name} disabled={disabled} />
        {title}
  </StyledRadio>;
};

export default Radio;