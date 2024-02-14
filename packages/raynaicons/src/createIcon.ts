import { IconNode } from "@writeens/build-icons";
import { RaynaIcon, RaynaIconAttributes } from "./types";

const createElementFromNode = (node: {
  name: string;
  attributes: RaynaIconAttributes;
}) => {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    node.name,
  );

  Object.keys(node.attributes).forEach((key) => {
    element.setAttribute(key, `${node.attributes[key]}`);
  });

  return element;
};

const toSVG =
  (icon: IconNode) =>
  (attributes: RaynaIconAttributes = {}) => {
    const {
      width: defaultWidth,
      height: defaultHeight,
      viewBox: defaultViewBox,
      ast,
    } = icon;

    const defaultClassName = `rayna rayna-${icon.name}`;

    const newAttributes = {
      ...attributes,
      width: attributes.width ?? defaultWidth,
      height: attributes.height ?? defaultHeight,
      viewBox: attributes.viewBox ?? defaultViewBox,
      class: [defaultClassName, attributes.class].filter(Boolean).join(" "),
    };

    const svgNode = {
      ...ast.parent,
      attributes: { ...ast.parent.attributes, ...newAttributes },
    };
    const svg = createElementFromNode(svgNode);

    ast.children.forEach((node) => {
      const element = createElementFromNode(node);
      svg.appendChild(element);
    });

    return svg;
  };

export const createIcon = (icon: IconNode): RaynaIcon => ({
  name: icon.componentName,
  width: icon.width,
  height: icon.height,
  viewBox: icon.viewBox,
  keywords: icon.keywords,
  toSVG: toSVG(icon),
});
