const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require('fs');

const path = require("path");
const distDir = path.resolve(__dirname, "dist")
const distPath = path.join(distDir,"teamprofile.html")
const htmlTemplate = require('./src/htmlTemplate.js')

console.log("\nWelcome to team profile generator!\nAnswer the following prompts to build your team profile.\n")


const teamMembers = []

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter team managers name:',
        },

        {
            type: 'input',
            name: 'managerID',
            message: 'Enter team managers employee ID:',
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter team managers email:',
        },

        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter team managers office number:',
        }
    ]).then((answers) => {
    const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOfficeNumber
    )
    teamMembers.push(manager);
    menu()
    });
}

// Manue to add intern, add engineer, or generate team profile
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
                    message: 'Enter intern school:',
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
                teamMembers.push(engineer);
                menu()
            })
        } else {
            generateTeam();
        }
        
    })
}

const generateTeam = () => {
    console.log("Your team profile has been successfully generated!")
    fs.writeFileSync(distPath, htmlTemplate(teamMembers), "utf-8")
}

createManager ()