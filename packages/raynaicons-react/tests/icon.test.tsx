import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
// Build the iconfiles first to remove squiggly lines
import { FirstAidFilled } from "../src/__generated__";

describe("FirstAidFilled", () => {
  it("contains all the default props", () => {

    const testId = "icon"

    const { getByTestId } = render(<FirstAidFilled data-testid={testId} />)

    const svg = getByTestId(testId)

    expect(svg).toHaveAttribute("class", "rayna rayna-first-aid-filled")
    expect(svg).toHaveAttribute("fill", "currentColor")
    expect(svg).toHaveAttribute("width", "24")
    expect(svg).toHaveAttribute("height", "24")
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24")
    expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg")
  });

  it("should pass options correctly to the SVG", () => {

    const testId = "icon"

    const { getByTestId } = render(<FirstAidFilled data-testid={testId} size={40} className="custom-class" />)

    const svg = getByTestId(testId)

    expect(svg).toHaveAttribute("class", "rayna rayna-first-aid-filled custom-class")
    expect(svg).toHaveAttribute("width", "40")
    expect(svg).toHaveAttribute("height", "40")
  })

  it("should generate a title tag within the SVG if a title prop is passed", () => {

    const { getByText } = render(<FirstAidFilled title="Hello World" />)

    expect(getByText("Hello World")).toBeInTheDocument()
  })

  it("should overwrite the width and height attribute if size prop is passed", () => {

    const testId = "icon"

    const { getByTestId } = render(<FirstAidFilled data-testid={testId} size={30} width={20} height={20} />)

    const svg = getByTestId(testId)

    expect(svg).toHaveAttribute("class", "rayna rayna-first-aid-filled")
    expect(svg).toHaveAttribute("width", "30")
    expect(svg).toHaveAttribute("height", "30")
  })
});