const inquirer = require('inquirer');
const fs = require('fs');

// question array for each role

const managerQuestions = ["What is the team manager's name?", "What is the team manager's ID?", "What is the team manager's email?", "What is the team manager's office number?", "What type of team member would you like to add?"];
const engineerQuestions = ["What is the engineer's name?", "What is the engineer's ID?", "What is the engineer's email?", "What is the engineer's  GitHub username?", "What type of team member would you like to add?"];
const internQuestions = ["What is the intern's name?", "What is the intern's ID?", "What is the intern's email?", "What is the intern's school?", "What type of team member would you like to add?"];

function init() {
    inquirer
        .prompt([{
            type: 'input',
            message: managerQuestions[0],
            name: 'managerName'
        },
        {
            type: 'input',
            message: managerQuestions[1],
            name: 'managerId'
        },
        {
            type: 'input',
            message: managerQuestions[2],
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: managerQuestions[3],
            name: 'managerNumber'
        },
        {
            type: 'input',
            message: managerQuestions[4],
            name: 'managerAdd'
        }
        ]);
    // add function to go to engineer or intern questions or create HTML if don't add is chosen
    // if else to return those functions

    // .then((data) => writeToFile(index.html))
}

engineerPrompt = () => {
    inquirer
        .prompt([{
            type: 'input',
            message: engineerQuestions[0],
            name: 'engineerName'
        },
        {
            type: 'input',
            message: engineerQuestions[1],
            name: 'engineerId'
        },
        {
            type: 'input',
            message: engineerQuestions[2],
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: engineerQuestions[3],
            name: 'engineerGithub'
        },
        {
            type: 'input',
            message: engineerQuestions[4],
            name: 'engineerAdd'
        }
        ]);
    // add function to go to engineer or intern questions or append current to HTML if don't add is chosen
    // if else to return those functions

    // .then((data) => writeToFile(index.html))

}

internPrompt = () => {
    inquirer
        .prompt([{
            type: 'input',
            message: internQuestions[0],
            name: 'internName'
        },
        {
            type: 'input',
            message: internQuestions[1],
            name: 'internId'
        },
        {
            type: 'input',
            message: internQuestions[2],
            name: 'internEmail'
        },
        {
            type: 'input',
            message: internQuestions[3],
            name: 'internSchool'
        },
        {
            type: 'input',
            message: internQuestions[4],
            name: 'engineerAdd'
        }
        ]);
    // add function to go to engineer or intern questions or append current to HTML if don't add is chosen
    // if else to return those functions
    // .then((data) => writeToFile(index.html))

}

// function to write html 
// function writeToFile(data) {fs.writeFileSync}

// call function
init();