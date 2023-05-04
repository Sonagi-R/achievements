import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Layout from ".";
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  beforeEach(() => {
    render(
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the fa-steam icon link", () => {
    const steamIcon = screen.getByTitle('steam')
    expect(steamIcon).toBeInTheDocument();
  });

  it("renders the fa-trophy icon link", () => {
    const trophyIcon = screen.getByTitle('trophy')
    expect(trophyIcon).toBeInTheDocument();
  });

  it("renders the fa-cart-shopping icon link", () => {
    const cartIcon = screen.getByTitle('cart')
    expect(cartIcon).toBeInTheDocument();
  });
});
