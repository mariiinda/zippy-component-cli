#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { capitalize } = require("./utils");
const questions = require("./questions");
const parseTemplate = require("./parseTemplate");

program.version("1.0.0").description("Zippy component cli");

let command;

program
  .command("generate")
  .alias("g")
  .description("generate a component")
  .action(function() {
    command = "generate";
    prompt(questions).then(({ componentName: name, isFunctionComponent }) => {
      const componentName = capitalize(name);
      fs.writeFileSync(
        path.join(`${componentName}.jsx`),
        parseTemplate(componentName, isFunctionComponent)
      );
    });
  });

program.parse(process.argv);

if (typeof command === "undefined") {
  console.error(chalk.red("No command given. Run with --help to see commands"));
  process.exit(1);
}
