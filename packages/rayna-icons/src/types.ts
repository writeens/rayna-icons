/* eslint-disable no-unused-vars */
export type IconNode = {
  name: string;
  componentName: string;
  type: "filled" | "outlined";
  width: number;
  height: number;
  viewBox: string;
  keywords: string[];
  path: string;
};

export type RaynaIconAttributes = Record<string, string | number>;

export type RaynaIcon = {
  name: string;
  path: string;
  keywords: string[];
  width: number;
  height: number;
  viewBox: string;
  toSVG: (options?: RaynaIconAttributes) => string;
};
