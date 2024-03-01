import { IconNode } from "build-icons";
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
  ({
    width,
    height,
    viewBox = icon.viewBox,
    size,
    class: className,
    title,
    ...rest
  }: RaynaIconAttributes = {}) => {
    const newAttributes = {
      width: size ?? width ?? icon.width,
      height: size ?? height ?? icon.height,
      viewBox,
      class: [`rayna rayna-${icon.name}`, className].filter(Boolean).join(" "),
      ...rest,
    };

    const svgNode = {
      ...icon.ast.parent,
      attributes: { ...icon.ast.parent.attributes, ...newAttributes },
    };
    const svg = createElementFromNode(svgNode);

    if (title) {
      const titleElement = createElementFromNode({
        name: "title",
        attributes: {},
      });
      titleElement.textContent = `${title}`;
      svg.appendChild(titleElement);
    }

    icon.ast.children.forEach((node) => {
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
