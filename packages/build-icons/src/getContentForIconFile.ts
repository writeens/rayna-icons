import prettier from "prettier";
import { IconNode } from ".";

export const GENERATED_HEADER = "/* THIS FILE IS GENERATED. DO NOT EDIT IT. */";

/** Generate the content of an icon file from an icon node */
export const getContentForIconFile = async (icon: IconNode) => {
  const code = `
        ${GENERATED_HEADER}

        import {createIcon} from '../createIcon'
        import type {RaynaIcon} from '../types'

        /**
         * @name ${icon.componentName}
         * @description Rayna SVG icon node.
         * 
         * * */

        const ${icon.componentName}: RaynaIcon = createIcon(${JSON.stringify(icon)})

        export default ${icon.componentName}
        `;

  const formattedCode = await prettier.format(code, {
    semi: true,
    printWidth: 80,
    parser: "babel-ts",
  });

  return formattedCode;
};
