import path from "path";
import { readFileSync } from "fs-extra";
import { globbySync } from "globby";
import svgo from "svgo";

export const optimizeSVG = (globPattern: string) => {
  const filePaths = globbySync(globPattern);

  if (filePaths.length === 0) {
    throw new Error("No SVG file(s) found.");
  }

  console.log("Optimizing", filePaths.length, "icons");

  const optimizedSVGs = filePaths.map((filePath) => {
    const fileName = path.basename(filePath, ".svg");
    const type = filePath.split("/")[3] as "filled" | "outlined";
    const fileContent = readFileSync(filePath, "utf-8");

    const optimizedSVG = svgo.optimize(fileContent, {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    });

    return {
      content: optimizedSVG.data,
      fileName,
      type,
    };
  });

  console.log("Successfully optimized", filePaths.length, "icons");

  return optimizedSVGs;
};
