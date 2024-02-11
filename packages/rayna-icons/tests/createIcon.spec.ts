import { it, describe, expect } from "vitest";
import { createIcon } from "../src/createIcon";
import { IconNode } from "../src/types";

/** Check the __generated__ folder for a sample icon node */
const sampleIconNode: IconNode = {
  name: "first-aid-filled",
  componentName: "FirstAidFilled",
  type: "filled",
  width: 25,
  height: 24,
  viewBox: "0 0 25 24",
  keywords: ["health"],
  path: '<path fill="#101928" fill-rule="evenodd" d="M8.038 6.667H5.722A2.22 2.22 0 0 0 3.5 8.889v.482l7.266 2.698c.412.153.848.231 1.287.231h.894c.44 0 .875-.078 1.287-.231L21.5 9.37V8.89a2.22 2.22 0 0 0-2.222-2.222h-2.316A3.67 3.67 0 0 0 13.433 4h-1.866a3.67 3.67 0 0 0-3.529 2.667m2.195 0h4.534A1.66 1.66 0 0 0 13.433 6h-1.866c-.546 0-1.03.262-1.334.667M13.5 8.75a1 1 0 1 0-2 0 1 1 0 1 0 0 2 1 1 0 1 0 2 0 1 1 0 1 0 0-2" clip-rule="evenodd"></path><path fill="#101928" d="m5.027 17.302-.627-6.19 6.696 2.479a3 3 0 0 0 1.042.187h.724a3 3 0 0 0 1.042-.187l6.696-2.48-.627 6.191A3 3 0 0 1 16.988 20H8.012a3 3 0 0 1-2.985-2.698"></path>',
};

describe("createIcon", () => {
  it("creates an icon with the correct properties when given an icon node", () => {
    const icon = createIcon(sampleIconNode);

    expect(icon.name).toBe(sampleIconNode.componentName);
    expect(icon.path).toBe(sampleIconNode.path);
    expect(icon.keywords).toBe(sampleIconNode.keywords);
    expect(icon.width).toBe(sampleIconNode.width);
    expect(icon.height).toBe(sampleIconNode.height);
    expect(icon.viewBox).toBe(sampleIconNode.viewBox);
    expect(icon.toSVG).toBeDefined();
  });

  it("creates the correct string when the toSVG method is called without options", () => {
    const icon = createIcon(sampleIconNode);

    expect(icon.toSVG).toBeDefined();

    const svg = icon.toSVG();

    expect(svg).toMatchSnapshot();
  });

  it("creates the correct string when the toSVG method is called with options", () => {
    const icon = createIcon(sampleIconNode);

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
