import path from "path";
import { appendFile, outputFile, outputFileSync } from "fs-extra";
import { INode } from "svgson";
import { createIconNode } from "./createIconNode";
import { getContentForIconExport } from "./getContentForIconExport";
import {
  GENERATED_HEADER,
  getContentForIconFile,
} from "./getContentForIconFile";
import { optimizeSVG } from "./optimizeSVG";

/** Build icon files from icons and append their exports to a barrel file */
export const buildIconFiles = ({
  outputDirectory,
  rawIconDirectory,
  // eslint-disable-next-line no-use-before-define
}: BuildOptions) => {
  const exportsFileLocation = path.join(outputDirectory, "index.ts");

  const filePattern = path.join(rawIconDirectory, "*", "*.svg");

  /** Optimize SVGs */
  const optmizedSVGData = optimizeSVG(filePattern);

  /** Create icon node */
  const iconNodes = optmizedSVGData.map(createIconNode);

  /** Create the barrel file with a header */
  outputFileSync(exportsFileLocation, `${GENERATED_HEADER}\n`);

  Promise.all(
    iconNodes.map(async (iconNode) => {
      const outputFileLocation = path.join(
        outputDirectory,
        `${iconNode.name}.ts`,
      );

      /** Create the icon file */
      getContentForIconFile(iconNode).then((contentForIconFile) => {
        outputFile(outputFileLocation, contentForIconFile);
      });

      /** Add the new icon file as an entry in index.ts (barrel file) */
      getContentForIconExport(iconNode).then((contentForIconExport) => {
        appendFile(exportsFileLocation, contentForIconExport);
      });
    }),
  )
    .then(() => {
      console.log(
        "Successfully generated the icon file and exports for",
        iconNodes.length,
        "icons",
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

export type IconNode = {
  name: string;
  componentName: string;
  width: number;
  height: number;
  viewBox: string;
  keywords: string[];
  path: string;
  ast: {
    children: Pick<INode, "name" | "attributes">[];
  };
};

export type BuildOptions = {
  outputDirectory: string;
  rawIconDirectory: string;
};
