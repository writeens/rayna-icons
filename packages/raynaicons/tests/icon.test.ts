import { it, describe, expect } from "vitest";
// Build the iconfiles first to remove squiggly lines
import { FirstAidFilled } from "../src/__generated__";

describe("Icon", () => {
  it("returns an icon object with the correct properties", () => {
    const icon = FirstAidFilled;
    expect(icon.name).toBe("FirstAidFilled");
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

    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svg).toHaveAttribute("class", "rayna rayna-first-aid-filled");
  });

  it("creates the correct string when the toSVG method is called with options", () => {
    const icon = FirstAidFilled;

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG({
      width: "30",
      height: "40",
      "aria-hidden": "true",
      class: "custom-class",
    });

    expect(svg).toHaveAttribute("width", "30");
    expect(svg).toHaveAttribute("height", "40");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute(
      "class",
      "rayna rayna-first-aid-filled custom-class",
    );
  });

  it("maintains the default viewBox", () => {
    const icon = FirstAidFilled;

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG({
      width: "30",
      height: "40",
    });

    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svg).toHaveAttribute("width", "30");
    expect(svg).toHaveAttribute("height", "40");
  });

  it("sets the width and height based on the size attribute", () => {
    const icon = FirstAidFilled;

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG({
      size: 40,
    });

    expect(svg).toHaveAttribute("width", "40");
    expect(svg).toHaveAttribute("height", "40");
  });

  it("ensures that the size overrides width and height if all is set", () => {
    const icon = FirstAidFilled;

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG({
      size: 40,
      width: 22,
      height: 22,
    });

    expect(svg).toHaveAttribute("width", "40");
    expect(svg).toHaveAttribute("height", "40");
  });
});
