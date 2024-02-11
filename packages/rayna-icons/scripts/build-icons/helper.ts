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
