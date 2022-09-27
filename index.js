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



function appMenu(){
    console.log("Answer the following prompts to build your team profile.")

    inquirer.prompt([
        // Enter Employee Name
        {
        type: 'input',
        name: 'name',
        message: 'Enter the employee name:',
        },

        // Enter Employee ID
        {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
        },

        // Enter Employee Email
        {
        type: 'input',
        name: 'email',
        message: 'Enter employee email',
        },

         // Select type of employee to enter
        {
        type: 'list',
        name: 'employeeType',
        message: 'Select which type of employee you would like to enter',
        choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then((userChoice) => {
            if(userChoice.employeeType === "Manager"){
                // Enter Employee Office Number
                inquirer.prompt([
                    {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter managers office number',
                    }
                ])    
            } else if(userChoice.employeeType === "Engineer"){
                // Enter engineer
                inquirer.prompt([
                    {
                    type: 'input',
                    name: 'github',
                    message: 'Enter engineers github',
                    }
                ])
            } else {
                // only option left is intern
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Enter intern school',
                    }
                ])
            }



        }) .then((answers)=> {
    const htmlContent = generateHTML(answers);
    fs.writeFile('index.html', htmlContent, (err) =>
    err? console.log(err) : console.log('Team profile successfully created!'))
// });

// };

// this isn't working
const generateHTML = () =>
// ({name, id, email, employeeType, officeNumber, github, school} ) 
`
    Name:
    Employee ID: 


`;

// appMenu();