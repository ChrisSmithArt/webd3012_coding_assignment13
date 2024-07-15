import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<Partial<TextProps>>`
  background: ${(props) => (props.disabled ? "grey" : "white")};
  color: ${(props) => (props.disabled ? "light-grey" : "#BF4F74")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const Text = (React.FC<TextProps> = ({ title, backgroundColor, disabled }) => {
  return (
    <StyledText disabled={disabled} style={{ backgroundColor }}>
      {title}
    </StyledText>
  );
});

export default Text;
