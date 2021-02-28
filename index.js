const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('Develop/lib/Manager.js');
const Engineer = require('Develop/lib/Engineer.js');
const Intern = require('Develop/lib/intern.js');

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
            writeToFile('index.html', data);
            if (data.managerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.managerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('Develop/dist/index.html')
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
            writeToFile('index.html', data);
            if (data.managerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.managerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('Develop/dist/index.html')
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
            writeToFile('index.html', data);
            if (data.managerAdd === 'Add an engineer') {
                return engineerPrompt();
            }
            else if (data.managerAdd === 'Add an intern') {
                return internPrompt();
            }
            else {
                fs.appendFileSync('Develop/dist/index.html')
            }
        });
}


// function to write to html 
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, html(data), err => {
        if (err) {
            console.log(err);
        }
        console.log('Team member added')
    });
}

// function to add manager card to html

// function to add engineer card to html

//function to add intern card to html


// function to generate HTML
function generateHTML(data) {
    let man = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
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
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="card-header text-white bg-info mb-3">
                    <h4 class="card-title">${man.name}</h4>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${man.id}</li>
                    <li class="list-group-item"${man.email}</li>
                    <li class="list-group-item"${man.officeNumber}</li>
                  </ul>
            </div>
          </div>

    </div>
</div> -->
    
    `
}

// call function
init();