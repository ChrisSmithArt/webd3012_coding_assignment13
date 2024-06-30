import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

export interface CardProps {
  label: string;
}

const StyledCard = styled.div<Partial<CardProps>>`
  background: ${props => props.disabled? "grey" : "papayawhip"};
  color: ${props => props.disabled? "light-grey" : "#BF4F74"};
  cursor: ${props => props.disabled? "not-allowed" : "pointer"};
  font-size: 1em;
  margin: 3em;
  padding: 4em;
  text-align: center;
  border-radius: 25px;
  opacity:  ${props => props.disabled? "0.5" : "1.0"};
`;


const Card = React.FC<CardProps> = ({title, backgroundColor, disabled, content}) => {
  return <StyledCard disabled={disabled} style={{ backgroundColor }}>
    <h2>{title}</h2>
    <p>{content}</p>
  </StyledCard>;
};

export default Card;