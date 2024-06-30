import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";


const StyledImg = styled.img<Partial<ImgProps>>`
  background: ${props => props.disabled? "grey" : "white"};
=  cursor: ${props => props.disabled? "not-allowed" : "pointer"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  width: 200px;
  length: 200px;
  opacity:  ${props => (props.disabled? 0.5 : 1)};
`;

const Img= React.FC<ImgProps> = ({ disabled, alt, src }) => {
  return (
  <StyledImg src={src} alt={alt} disabled={disabled} />
  );
};


export default Img;