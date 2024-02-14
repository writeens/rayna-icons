import { it, describe, expect } from "vitest";
// Build the iconfiles first to remove squiggly lines
import { FirstAidFilled } from "../src/__generated__";

describe("Icon", () => {
  it("returns an icon object with the correct properties", () => {
    const icon = FirstAidFilled;
    expect(icon.name).toBe("FirstAidFilled");
    expect(icon.path).toMatchSnapshot();
    expect(icon.keywords).toStrictEqual(["health"]);
    expect(icon.width).toBe(24);
    expect(icon.height).toBe(24);
    expect(icon.viewBox).toBe("0 0 24 24");
    expect(icon.toSVG).toBeDefined();
  });

  it("creates the correct string when the toSVG method is called without options", () => {
    const icon = FirstAidFilled;

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG();

    expect(svg).toMatchSnapshot();
  });

  it("creates the correct string when the toSVG method is called with options", () => {
    const icon = FirstAidFilled;

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG({
      width: 30,
      height: 40,
      "aria-hidden": "true",
      viewBox: "0 0 30 40",
      class: "custom-class",
    });

    expect(svg).toMatchSnapshot();
  });
});
