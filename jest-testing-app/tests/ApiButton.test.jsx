import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiButtons from "../src/components/ApiButtons";

describe("API Button Tests (Real Internet Calls)", () => {
  test("Button 1 is rendered", () => {
    render(<ApiButtons />);
    expect(screen.getByText("Api Call with Timeout")).toBeInTheDocument();
  });

  test("Button 2 is rendered", () => {
    render(<ApiButtons />);
    expect(screen.getByText("Api Call without Timeout")).toBeInTheDocument();
  });

  test("Button 3 is rendered", () => {
    render(<ApiButtons />);
    expect(screen.getByText("Api Call with Promise")).toBeInTheDocument();
  });

  // CLICK TESTS (REAL API)
  test("Button 1 can be clicked and changes result", async () => {
    
    render(<ApiButtons />);

    await userEvent.click(screen.getByText("Api Call with Timeout"));

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByTestId("result-box")).not.toBeEmptyDOMElement();
    });
  });

  test("Button 2 can be clicked and changes result", async () => {
    render(<ApiButtons />);
    
    await userEvent.click(screen.getByText("Api Call without Timeout"));

    await waitFor(() => {
      expect(screen.getByTestId("result-box")).not.toBeEmptyDOMElement();
    });
  });

  test("Button 3 can be clicked and changes result", async () => {
    render(<ApiButtons />);
    
    await userEvent.click(screen.getByText("Api Call with Promise"));

    await waitFor(() => {
      expect(screen.getByTestId("result-box")).not.toBeEmptyDOMElement();
    });
  });
});
