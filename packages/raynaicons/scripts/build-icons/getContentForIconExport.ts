import prettier from "prettier";
import { IconNode } from "../../src/types";

export const getContentForIconExport = async (icon: IconNode) => {
  const importString = `export { default as ${icon.componentName} } from './${icon.name}';\n`;
  const formattedCode = await prettier.format(importString, {
    semi: true,
    printWidth: 80,
    parser: "babel-ts",
  });

  return formattedCode;
};
