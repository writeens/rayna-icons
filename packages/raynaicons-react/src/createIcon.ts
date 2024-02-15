/* eslint-disable no-use-before-define */
import { IconNode } from "@writeens/build-icons";
import { forwardRef, createElement } from "react";
import type { RaynaIcon, RaynaProps } from "./types";

export const createIcon = (iconNode: IconNode): RaynaIcon => {
  const Component = forwardRef<SVGSVGElement, RaynaProps>(
    ({ width, height, title, size = 24, className, ...rest }, ref) =>
      createElement(
        "svg",
        {
          ref,
          ...iconNode.ast.parent.attributes,
          width: width ?? size ?? iconNode.width,
          height: height ?? size ?? iconNode.height,
          className: ["rayna", `rayna-${iconNode.name}`, className]
            .filter(Boolean)
            .join(" "),
          ...rest,
        },
        [
          title && createElement("title", {}, title),
          iconNode.ast.children.map((node) =>
            createElement(node.name, toReactAttributes(node.attributes)),
          ),
        ].filter(Boolean),
      ),
  );

  Component.displayName = `${iconNode.componentName}`;

  return Component;
};

const toCamelCase = (kebabCase: string) =>
  kebabCase
    .split("-")
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
    })
    .join("");

/** Prefer camelCase for React attributes */
const toReactAttributes = (attributes: Record<string, string>) =>
  Object.entries(attributes).reduce(
    (acc, [key, value]) => {
      acc[toCamelCase(key)] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
