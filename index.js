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
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'menu',
            message:'Do you want to add another team member?',
            default: 'true',    
        }
    ])
    // if yes, go to addteam function
    // if no, go to generate profile function

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

