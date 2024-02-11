import { IconNode, RaynaIcon, RaynaIconAttributes } from "./types";

const toSVG = (icon: IconNode) => (attributes?: RaynaIconAttributes) => {
  const {
    width: defaultWidth,
    height: defaultHeight,
    viewBox: defaultViewBox,
  } = icon;
  const defaultClassName = `rayna rayna-${icon.name}`;

  const newAttributes: RaynaIconAttributes = {
    ...attributes,
    width: attributes && attributes.width ? attributes.width : defaultWidth,
    height: attributes && attributes.height ? attributes.height : defaultHeight,
    viewBox:
      attributes && attributes.viewBox ? attributes.viewBox : defaultViewBox,
    class:
      attributes && attributes.class
        ? `${defaultClassName} ${attributes.class}`
        : defaultClassName,
  };

  const attributesAsString = Object.keys(newAttributes)
    .map((key) => `${key}="${newAttributes[key]}"`)
    .join(" ");

  return `<svg ${attributesAsString}>${icon.path}</svg>`;
};

export const createIcon = (icon: IconNode): RaynaIcon => ({
  name: icon.componentName,
  width: icon.width,
  height: icon.height,
  viewBox: icon.viewBox,
  path: icon.path,
  keywords: icon.keywords,
  toSVG: toSVG(icon),
});
