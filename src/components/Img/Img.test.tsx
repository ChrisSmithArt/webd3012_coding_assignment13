import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Img from "./Img";


describe("Img", () => {
  it('Should be visible', () => {
    render(<Img src="sb-logo.png" alt="Img" />);
    const imgElement = screen.getByAltText("Img");
    expect(imgElement).toBeVisible();
  });

  it('should have the correct background color when disabled', () => {
    render(<Img src="..." alt="Img" disabled/>);
    const imgElement = screen.getByAltText("Img");
    expect(imgElement).toHaveStyle("opacity: 0.5");
    expect(imgElement).toHaveStyle("cursor: not-allowed");
 });

});

