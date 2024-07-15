import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
  it("Should be visible", () => {
    render(<Card title="Card" />);
    const cardElement = screen.getByText("Card");
    expect(cardElement).toBeVisible();
  });
});

it("should have the correct background color when disabled", () => {
  render(<Card title="Disabled Card" disabled />);
  const cardElement = screen.getByText("Disabled Card").parentNode;
  expect(cardElement).toHaveStyle("background-color: grey");
  expect(cardElement).toHaveStyle("cursor: not-allowed");
});
