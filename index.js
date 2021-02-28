const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Develop/lib/Manager');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
var employees = 1

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
                fs.appendFileSync('index.html', end());
            }
        });
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

            fs.appendFileSync('index.html', addEng(data));

            if (data.engineerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.engineerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('index.html', end());
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

            fs.appendFileSync('index.html', addInt(data));

            if (data.internAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.internAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('index.html', end());
            };
        });
}

// function to write to html 
function writeToFile(data) {

    fs.writeFileSync('index.html', generateHTML(data), err => {
        if (err) {
            console.log(err);
        }
        console.log('Team member added')
    });
}

function addEng(data) {
    let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    employees++;
    return `<div class="row">
    <div class="card" id="engineer" style="width: 18rem;">
    <div class="card-body">
        <div class="card-header text-white bg-info mb-3">
            <h4 class="card-title">${engineer.name}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.id}</li>
            <li class="list-group-item">${engineer.email}</li>
            <li class="list-group-item">${engineer.github}</li>
        </ul>
    </div>
</div>`
}
//function to add intern card to html

function addInt(data) {
    let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
    employees++;
    return `<div class="row">
    <div class="card" id="intern" style="width: 18rem;">
    <div class="card-body">
        <div class="card-header text-white bg-info mb-3">
            <h4 class="card-title">${intern.name}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.id}</li>
            <li class="list-group-item">${intern.email}</li>
            <li class="list-group-item">${intern.school}</li>
        </ul>
    </div>
</div>`

}

// function to generate HTML with manager input
function generateHTML(data) {
    let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerNumber);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    
    </head>
    
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="card" id="manager" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header text-white bg-info mb-3">
                    <h4 class="card-title">${manager.name}</h4>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.id}</li>
                    <li class="list-group-item">${manager.email}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                  </ul>
            </div>
          </div>
    </div>
</div>
     `
}

function end() {
    return `</div>
    </div>
    </body>
    </html>`
}

// call function
init();