const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require('fs');

const path = require("path");

const distDir = path.resolve(__dirname, 'dist')
console.log(distDir)
const distPath = path.join(distDir,"teamprofile.html")
console.log(distPath)

console.log("Welcome to team profile generator! Answer the following prompts to build your team profile.")


const teamMembers = []

// function for team manager's information
    // name, employee ID, email address, and office number
    // create const = new Manager
    // push to teamMembers

// create menu
const menu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message:'Select what you would like to do next:',
            choices: [
                "Add intern to team",
                "Add engineer to team",
                "Generate team profile"
            ]    
        }
    ]).then((userChoice) => {
        // console.log(userChoice);
        if(userChoice.menu === "Add intern to team") {
            inquirer.prompt ([
                // Intern Name
                {
                    type: 'input',
                    name: 'internName',
                    message: 'Enter intern name:',
                },

                // Intern ID
                {
                    type: 'input',
                    name: 'internID',
                    message: 'Enter intern employee ID:',
                },
                // Intern Email
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Enter intern email:',
                },
                // Intern School
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'Enter intern school',
                }

            ]).then((answers) => {
                const intern = new Intern(
                    answers.internName,
                    answers.internID,
                    answers.internEmail,
                    answers.internSchool
                )
                // console.log(answers);
                teamMembers.push(intern);
                menu()
            })
        } else if(userChoice.menu === "Add engineer to team") {
            inquirer.prompt ([
                // Engineer name
                {
                    type: 'input',
                    name:'engineerName',
                    message: 'Enter engineer name:',
                },
                // Engineer ID
                {
                    type: 'input',
                    name: 'engineerID',
                    message: 'Enter engineer employee ID:',
                },
                // Engineer Email
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Enter engineer email:',
                },
                // Engineer Github
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: 'Enter engineer github:',
                }
            ]).then((answers) => {
                const engineer = new Engineer (
                    answers.engineerName,
                    answers.engineerID,
                    answers.engineerEmail,
                    answers.engineerGithub
                )
                // console.log(answers);
                teamMembers.push(engineer);
                menu()
            })
        } else {
            generateTeam();
        }
    })
}

    const generateTeam = () => {

    }

menu ()

    // if yes, go to addteam function
    // if no, go to generateTeam function

// addteam function
    // menu with option to add engineer or intern
        // either go to addenginer or addintern

//addintern function
    // if add intern selected
        // enter intern name, ID, email address, school
        // create const = new Intern
        // push to teamMembers
        // return to menu

// add engineer function
    // if add engineer selected
        // enter engineer name, id, email address, github
        // create const = new Engineer 
        // push to teamMembers
        // return to menu
        // finish building team

// const buildteam function
    // in this function there is the generateHTML

// appMenu();

