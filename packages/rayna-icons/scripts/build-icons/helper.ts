import yargs from "yargs";

/** Get the arguments from the command line */
export const getArguments = () => {
  const argv = yargs(process.argv.slice(2))
    .option("outputDirectory", {
      type: "string",
      demandOption: true,
      describe: "Directory where the processed icon files should be stored",
    })
    .option("rawIconDirectory", {
      type: "string",
      demandOption: true,
      describe: "Directory where the raw icons are stored",
    })
    .parseSync();

  return {
    outputDirectory: argv.outputDirectory,
    rawIconDirectory: argv.rawIconDirectory,
  };
};

/** Convert icon name (abc-def-ghi) to pascal case (AbcDefGhi) */
export const iconNameToPascalCase = (name: string) => {
  const parts = name.split("-");
  return parts
    .map((part) => `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}`)
    .join("");
};
