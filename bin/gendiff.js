#!/usr/bin/env node

import { program } from "commander";

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format');
 
program.parse();

console.log(program);
