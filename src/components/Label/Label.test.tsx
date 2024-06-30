import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Label from "./Label";


describe("Label", () => {
  it('Should be visible', () => {
    render(<Label title="Label" />);
    const labelElement = screen.getByText("Label");
    expect(labelElement).toBeVisible();
  });
});

  it('should have the correct background color when disabled', () => {
    render(<Label title="Disabled Label" disabled/>);
    const labelElement = screen.getByText("Disabled Label");
    expect(labelElement).toHaveStyle("opacity: 0.5");
    expect(labelElement).toHaveStyle("cursor: not-allowed");
});
