import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

describe("sidebar", () => {
  test("first", () => {
    render(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
