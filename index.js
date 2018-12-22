#!/usr/bin/env node

'use strict';

const inquirer = require('inquirer');
const dogBreedsFile = './dogbreeds.txt';
const fs = require('fs');
const emoji = require('node-emoji');

const dogBreeds = fs.readFileSync(dogBreedsFile).toString().split('\n').map(function(line) {
  return line.trim();
});

const doggyBreed = [{
    type: 'list',
    name: 'Dog breeds',
    message: 'Dog breeds',
    choices: dogBreeds,
    default: ['Dog']
}];

inquirer.prompt(doggyBreed).then(function(dogThoughts) {
  for(;;) {
    process.stdout.write(emoji.get('dog'));
  }
});
