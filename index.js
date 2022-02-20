// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = [];


const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'How would you describe your project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'How is your project intended to be used?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What are the licenses required for this project?',
        choices: ['MIT', 'GNU', 'Apache-2.0'],
        default: ["MIT"],
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the tests for your project?',
      },
      {
        type: 'input',
        name: 'Contributors',
        message: 'WHat do future contributors need to know?'
      }
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
