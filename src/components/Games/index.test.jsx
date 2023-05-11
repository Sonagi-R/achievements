import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Games from ".";
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Games />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders Dashboard header", () => {
    const heading = screen.getByRole("heading", { name: /Dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders Popular Games header", () => {
    const heading = screen.getByRole("heading", { name: /Popular Games/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all category headers", () => {
    const categoryHeader = document.querySelectorAll(".category-header");
    expect(categoryHeader.length).toBe(3);
  });

  it("renders New Release categories", () => {
    const categories = document.querySelectorAll(".game-category");
    expect(categories.length).toBe(18);
  });
});
