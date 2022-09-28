const generateTeam = (teamMembers) => {
    const html = []

    // Manager Card
    const generateManager = manager => {
        let managerHTML = `
        
        <div class="card col-3">
            <div class="card-body">
                <h5 class="border-bottom text-success">${manager.name}</h5>
                <p class="card-text"><i class="bi bi-person-fill"></i> Manager</p>
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text">Office #: ${manager.officeNumber}</p>
            </div>
            </div>
        `;
        html.push(managerHTML);
    }

    // Engineer Card
    const generateEngineer = engineer => {
        let engineerHTML = `

        <div class="card col-3">
                    <div class="card-body">
                        <h5 class="border-bottom text-success">${engineer.name}</h5>
                        <p class="card-text"><i class="bi bi-gear-fill"></i> Engineer</p>
                        <p class="card-text">ID: ${engineer.id}</p>
                        <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="card-text">Github: <a href="https://github.com/${engineer.github}/" target="blank"</a>${engineer.github}</p>
                    </div>
                </div>

        `;
        html.push(engineerHTML);
    }

    // Intern Card
    const generateIntern = intern => {
        let internHTML = `

        <div class="card col-3">
                    <div class="card-body">
                        <h5 class="border-bottom text-success">${intern.name}</h5>
                        <p class="card-text"><i class="bi bi-mortarboard-fill"></i> Intern</p>
                        <p class="card-text">ID: ${intern.id}</p>
                        <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="card-text">School: ${intern.school}</p>
                    </div>
                </div>
        `;
        html.push(internHTML);
    }


    // for loop to go through each team member   
        for (i =0; i < teamMembers.length; i++) {
            if(teamMembers[i].getRole() === "Manager"){
                generateManager(teamMembers[i]);
            }
            if(teamMembers[i].getRole() === "Engineer"){
                generateEngineer(teamMembers[i]);
            }
            if(teamMembers[i].getRole() === "Intern"){
                generateIntern(teamMembers[i]);
            }
        } return html.join('');
    }

module.exports = teamMembers => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
       
    
    </head>
    <body>
        <div class="container p-3">
            <div class="text-center bg-success bg-opacity-75 p-1">
                <h1>My Team</h1>
            </div>
        </div>
        
        <div class="container text-center">
            <div class="row justify-content-around">
    
                    ${generateTeam(teamMembers)}
    
            </div>
        </div>
    </body>
    </html>          
    
    `
}

