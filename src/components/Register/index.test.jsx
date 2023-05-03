import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Register from "./index";
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  beforeEach(() => {
    render(
          <BrowserRouter>
            <Register />
          </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders Achievement header", () => {
    const heading = screen.getByRole("heading", { name: /Achievement/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders Register header", () => {
    const heading = screen.getByRole("heading", { name: /Register/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders an input field for entering the username", () => {
    const userInput = screen.queryByPlaceholderText("Username");
    expect(userInput).toBeInTheDocument();
  });

  it("renders an input field for entering the password", () => {
    const password = screen.queryByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });

  it("renders an input field for entering the password confirmation", () => {
    const confirmPassword = screen.queryByPlaceholderText("Confirm Password");
    expect(confirmPassword).toBeInTheDocument();
  });

  it("renders an input field for entering the email", () => {
    const email = screen.queryByPlaceholderText("Email");
    expect(email).toBeInTheDocument();
  });

  it("renders a sumbit button for registering", () => {
    const submit = screen.getByRole("button", { name: /Submit/i });
    expect(submit).toBeInTheDocument();
  });

  it("renders footer text", () => {
    const footer = screen.getByText(/Already have an account/i);
    expect(footer).toBeInTheDocument();
  });

  it("renders link to login page", () => {
    const loginLink = screen.getByRole("link", { name: /Login Here/i });
    expect(loginLink).toBeInTheDocument();
  });
});