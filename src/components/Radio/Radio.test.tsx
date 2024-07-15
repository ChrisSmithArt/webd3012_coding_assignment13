import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Radio from "./Radio";

describe("Radio", () => {
  it("Should be visible", () => {
    render(<Radio title="Radio" />);
    const radioElement = screen.getByLabelText("Radio");
    expect(radioElement).toBeVisible();
  });
});

it("should have the correct background color when disabled", () => {
  render(<Radio title="Disabled Radio" disabled />);
  const radioElement = screen.getByLabelText("Disabled Radio").parentElement;
  expect(radioElement).toHaveStyle("background-color: grey");
  expect(radioElement).toHaveStyle("cursor: not-allowed");
});
