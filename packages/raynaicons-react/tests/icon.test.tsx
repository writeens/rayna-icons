import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
// Build the iconfiles first to remove squiggly lines
import { FirstAidFilled } from "../src/__generated__";

describe("FirstAidFilled", () => {
  it("is a valid react component", () => {

    const { container } = render(<FirstAidFilled />)

    expect(container).toMatchSnapshot()
  });

  it("should pass options correctly to the SVG", () => {

    const testId = "icon"

    const { getByTestId } = render(<FirstAidFilled data-testid={testId} size={40} className="custom-class" />)

    const svg = getByTestId(testId)

    screen.debug(svg)

    expect(svg).toHaveAttribute("class", "rayna rayna-first-aid-filled custom-class")
    expect(svg).toHaveAttribute("width", "40")
    expect(svg).toHaveAttribute("height", "40")
  })
});
