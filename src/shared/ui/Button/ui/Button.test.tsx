import * as React from "react";
import { render, screen } from "@testing-library/react";
import Button, { IThemeButton } from "./Button";

describe("Button", () => {
  test("first", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("second", () => {
    render(<Button theme={IThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText("test")).toHaveClass("clear");
  });
});
