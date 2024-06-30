import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Text from "./Text";


describe("Text", () => {
  it('Should be visible', () => {
    render(<Text title="Text" />);
    const textElement = screen.getByText("Text");
    expect(textElement).toBeVisible();
  });
});

  it('should have the correct background color when disabled', () => {
    render(<Text title="Disabled Text" disabled/>);
    const textElement = screen.getByText("Disabled Text");
    expect(textElement).toHaveStyle("background-color: grey");
    expect(textElement).toHaveStyle("cursor: not-allowed");
});
