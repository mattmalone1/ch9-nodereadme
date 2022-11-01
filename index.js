// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your readme?', 'What is the description you would like to enter?', 'What are the installation instructions?', 'What are the ussage instructions?',
                    'Who was contributing to the project?', 'What are the test instructions?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[5],
            },
        ])
        .then((data) => {
            const readmePageContent = generateMarkdown(data)
            
            writeToFile('README.md', readmePageContent);
        }
        );

}

// Function call to initialize app
init();
