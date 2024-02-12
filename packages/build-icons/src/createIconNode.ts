/* eslint-disable import/no-relative-packages */
import { load } from "cheerio";
import { parseSync } from "svgson";
import keywordJSON from "../../../keywords.json" assert { type: "json" };
import { iconNameToPascalCase } from "./helper";
import { optimizeSVG } from "./optimizeSVG";
import { IconNode } from ".";

const keywords = keywordJSON as Record<string, string[]>;

export const createIconNode = (
  svg: ReturnType<typeof optimizeSVG>[number],
): IconNode => {
  const SVGElement = load(svg.content)("svg");
  const SVGWidth = parseInt(SVGElement.attr("width") || "", 10);
  const SVGHeight = parseInt(SVGElement.attr("height") || "", 10);
  const SVGViewBox = SVGElement.attr("viewBox") || "";
  const SVGPath = SVGElement.html() ?? "";
  const SVGName = `${svg.fileName}-${svg.type}`;
  const ast = parseSync(svg.content);

  if (!SVGHeight) {
    throw new Error(`${SVGName}: Missing height attribute.`);
  }

  if (!SVGWidth) {
    throw new Error(`${SVGName}: Missing width attribute.`);
  }

  if (!SVGViewBox) {
    throw new Error(`${SVGName}: Missing viewBox attribute.`);
  }

  const viewBoxPattern = /0 0 ([0-9]+) ([0-9]+)/;

  const viewBoxMatches = SVGViewBox.match(viewBoxPattern);

  if (!viewBoxMatches) {
    throw new Error(
      `${SVGName}: Invalid viewBox attribute. Ensure the viewBox is in the following format: "0 0 <width> <height>"`,
    );
  }

  const [, viewBoxWidth, viewBoxHeight] = viewBoxMatches;

  if (SVGWidth !== parseInt(viewBoxWidth, 10)) {
    throw new Error(
      `${SVGName}: Invalid width attribute. The width attribute and the viewBox width do not match`,
    );
  }

  if (SVGHeight !== parseInt(viewBoxHeight, 10)) {
    throw new Error(
      `${SVGName}: Invalid height attribute. The height attribute and the viewBox height do not match`,
    );
  }

  return {
    name: SVGName,
    componentName: iconNameToPascalCase(SVGName),
    width: SVGWidth,
    height: SVGHeight,
    viewBox: SVGViewBox,
    keywords: keywords[svg.fileName],
    path: SVGPath,
    ast: {
      children: ast.children.map((node) => ({
        name: node.name,
        attributes: node.attributes,
      })),
    },
  };
};
