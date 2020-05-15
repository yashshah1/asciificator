#!/usr/bin/env node
const { Command } = require('commander');
const { version } = require('../package.json');
const asciificator = require('./asciificator');

const myParseInt = value => parseInt(value);

const options = new Command();
options
  .version(version)
  .requiredOption('-i, --input-file <file>', 'Path to input file')
  .option('-o, --output-file <file>', 'Name of output file', null)
  .option('--image-width <width>', 'Width of ouput ASCII art', myParseInt, 100)
  .option(
    '--image-height <height>',
    'Width of ouput ASCII art',
    myParseInt,
    null,
  )
  .option('--red-weight <weight>', 'Red Weight for B/w', parseFloat, 0.3)
  .option('--green-weight <weight>', 'Green Weight for B/w', parseFloat, 0.578)
  .option('--blue-weight <weight>', 'Blue Weight for B/w', parseFloat, 0.122);
options.parse(process.argv);
asciificator(options.opts());
