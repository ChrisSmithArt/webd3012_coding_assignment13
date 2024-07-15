import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("Should be visible", () => {
    render(<Button title="Button" />);
    const buttonElement = screen.getByText("Button");
    expect(buttonElement).toBeVisible();
  });
});

it("should have the correct background color when disabled", () => {
  render(<Button title="Disabled Button" disabled />);
  const buttonElement = screen.getByText("Disabled Button");
  expect(buttonElement).toHaveStyle("background-color: grey");
  expect(buttonElement).toHaveStyle("cursor: not-allowed");
});
