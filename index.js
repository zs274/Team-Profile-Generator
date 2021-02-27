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
            type: 'list',
            message: managerQuestions[4],
            name: 'managerAdd',
            choices: ['Add an engineer', 'Add an intern', 'I do not want to add anyone else']
        }
        ])
        .then((data) => {
            writeToFile(data);
            if (data.managerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.managerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('dist/index.html')
            }
        });
    // need to add code to finish making the html in else statement
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
            type: 'list',
            message: engineerQuestions[4],
            name: 'engineerAdd',
            choices: ['Add an engineer', 'Add an intern', 'I do not want to add anyone else']
        }
        ])
        .then((data) => {
            writeToFile(data);
            if (data.managerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.managerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('dist/index.html')
            }
        });
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
            type: 'list',
            message: internQuestions[4],
            name: 'internAdd',
            choices: ['Add an engineer', 'Add an intern', 'I do not want to add anyone else']
        }
        ])
        .then((data) => {
            writeToFile(data);
            if (data.managerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.managerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('dist/index.html')
            }
        });
}

// function to write html 
// function writeToFile(data) {fs.writeFileSync}

// call function
init();