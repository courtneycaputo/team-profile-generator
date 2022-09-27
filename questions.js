// saving questions here to psuedocode on index.js before filling in with questions already created

function appMenu(){

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



        }) 
    }