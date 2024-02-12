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
          width: width ?? size ?? iconNode.width,
          height: height ?? size ?? iconNode.height,
          className: ["rayna", `rayna-${iconNode.name}`, className].join(" "),
          ...rest,
        },
        [
          title && createElement("title", {}, title),
          iconNode.ast.children.map((node) =>
            createElement(node.name, node.attributes),
          ),
        ].filter(Boolean),
      ),
  );

  Component.displayName = `${iconNode.componentName}`;

  return Component;
};
