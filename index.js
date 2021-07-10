#!/usr/bin/env node
const chalk = require("chalk");
var program = require("commander");

console.log(chalk.blue("Hello, world!"));

program
  .arguments("<file>")
  .option("-u, --username <username>", "The user to authenticate as")
  .option("-p, --password <password>", "The user's password")
  .action(function (file) {
    console.log(
      "user: %s pass: %s file: %s",
      program.username,
      program.password,
      file
    );
  })
  .parse(process.argv);
