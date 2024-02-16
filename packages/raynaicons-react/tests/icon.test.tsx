import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
// Build the iconfiles first to remove squiggly lines
import { FirstAidFilled, FirstAidOutlined } from "../src/__generated__";

describe("FirstAidFilled", () => {
  it("is a valid react component", () => {

    const { container } = render(<FirstAidFilled />)

    expect(container).toMatchSnapshot()
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

    const testId = "icon"

    const { getByTestId } = render(<FirstAidFilled data-testid={testId} title="Hello World" />)

    const svg = getByTestId(testId)

    expect(svg.childNodes[0]).toHaveTextContent("Hello World")
  })
});

describe("FirstAidOutlined", () => {
  it("is a valid react component", () => {

    const { container } = render(<FirstAidOutlined />)

    expect(container).toMatchSnapshot()
  });

  it("should pass options correctly to the SVG", () => {

    const testId = "icon"

    const { getByTestId } = render(<FirstAidOutlined data-testid={testId} size={40} className="custom-class" />)

    const svg = getByTestId(testId)

    expect(svg).toHaveAttribute("class", "rayna rayna-first-aid-outlined custom-class")
    expect(svg).toHaveAttribute("width", "40")
    expect(svg).toHaveAttribute("height", "40")
  })

  it("should generate a title tag within the SVG if a title prop is passed", () => {

    const testId = "icon"

    const { getByTestId } = render(<FirstAidFilled data-testid={testId} title="Hello World" />)

    const svg = getByTestId(testId)

    expect(svg.childNodes[0]).toHaveTextContent("Hello World")
  })
});