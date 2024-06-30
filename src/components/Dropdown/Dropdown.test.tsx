import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Dropdown from "./Dropdown";


describe("Dropdown", () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('Should be visible', () => {
    render(<Dropdown options={options} />);
    const dropdownElement = screen.getByText("Option 1");
    expect(dropdownElement).toBeVisible();
  });


  it('should have the correct background color when disabled', () => {
    render(<Dropdown options={options} disabled/>);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toHaveStyle("background-color: grey");
    expect(dropdownElement).toHaveStyle("cursor: not-allowed");
  });
});