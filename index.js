//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//Array of questions used by inquirer
const questions = [
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
        name: 'Installation',
        message: 'What are the steps to install your project?',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What are the licenses required for this project?',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
        default: ["MIT"],
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What are the tests for your project?',
      },
      {
        type: 'input',
        name: 'Contributors',
        message: 'What do future contributors need to know?'
      }
    ];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("README.md has been created");
  })
}

// Function to Initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) =>
    writeToFile("README.md", generateMarkdown(answers))
    );
}

// Function call to initialize app
init();
