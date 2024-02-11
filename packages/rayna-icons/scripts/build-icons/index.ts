import path from "path";
import { appendFile, outputFile, outputFileSync } from "fs-extra";
import { createIconNode } from "./createIconNode";
import { getContentForIconExport } from "./getContentForIconExport";
import {
  GENERATED_HEADER,
  getContentForIconFile,
} from "./getContentForIconFile";
import { getArguments } from "./helper";
import { optimizeSVG } from "./optimizeSVG";

/** Main entrypoint for the build:icons script */
const main = () => {
  /** Get the arguments from the command line */
  const { outputDirectory, rawIconDirectory } = getArguments();

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

/** Start the script */
main();
