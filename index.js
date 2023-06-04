// Importing required node modules
const fs = require('fs'); // File system module to work with the file system on your computer.
const path = require('path'); // Path module provides utilities for working with file and directory paths.
const inquirer = require('inquirer'); // Inquirer module to interact with the user via the command-line.
const generateMarkdown = require('./utils/generateMarkdown'); // Custom module to generate markdown content.

// List of questions for user input
const questions = [
  // GitHub username
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  // Email address
  {
    type: 'input',
    name: 'email',
    message: 'What is your preferred email address?',
  },
  // Project name
  {
    type: 'input',
    name: 'title',
    message: "What is the name of your project?",
  },
  // Project description
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short and concise description of your project',
  },
  // License for the project
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license will your project require?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  // Command to install dependencies
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be used to install dependencies?',
    default: 'npm i',
  },
  // Command to run tests
  {
    type: 'input',
    name: 'test',
    message: 'What command should be used to run tests?',
    default: 'npm test',
  },
  // Usage instructions
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  // Contribution instructions
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to write data to a file
function writeToFile(fileName, data) {
  // Write the data to a file in the current working directory
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize the application
function init() {
  // Prompt the user with the questions, then generate a README file with their responses
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    // Call the writeToFile function with the filename and generated markdown as parameters
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Start the application
init();
