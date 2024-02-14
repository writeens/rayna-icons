/* eslint-disable no-unused-vars */
export type RaynaIconAttributes = Record<string, string | number>;

export type RaynaIcon = {
  name: string;
  keywords: string[];
  width: number;
  height: number;
  viewBox: string;
  toSVG: (options?: RaynaIconAttributes) => SVGElement;
};
