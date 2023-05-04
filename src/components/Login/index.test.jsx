import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { UserProvider } from "../../context";
expect.extend(matchers);
import Register from "./index";
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  beforeEach(() => {

    render(
      <UserProvider>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </UserProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders Achievement header", () => {
    const heading = screen.getByRole("heading", { name: /Achievement/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders Login header", () => {
    const heading = screen.getByRole("heading", { name: /Login/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders an input field for entering the email", () => {
    const email = screen.queryByPlaceholderText("Email");
    expect(email).toBeInTheDocument();
  });

  it("renders an input field for entering the password", () => {
    const password = screen.queryByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });

  it("renders a sumbit button for registering", () => {
    const submit = screen.getByRole("button", { name: /Submit/i });
    expect(submit).toBeInTheDocument();
  });

  it("renders footer text", () => {
    const footer = screen.getByText(/Don't have an account/i);
    expect(footer).toBeInTheDocument();
  });

  it("renders link to register page", () => {
    const registerLink = screen.getByRole("link", { name: /Register Here/i });
    expect(registerLink).toBeInTheDocument();
  });
});
