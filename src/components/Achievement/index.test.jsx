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

  it("renders the Achievements header", () => {
    const heading = screen.getByRole("heading", { name: /Achievements/i });
    expect(heading).toBeInTheDocument();
  });
    
    
    //replace name with gameName state from database
  it("renders the game title header", () => {
    const heading = screen.getByRole("heading", { name: /The Witcher 3/i });
    expect(heading).toBeInTheDocument();
  });
    
});