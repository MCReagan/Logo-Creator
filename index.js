const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter one to three characters for your Logo.',
                name: 'name',
                validate: (answer) => {
                    if (answer.length > 3 || answer.length == 0) {
                        return console.log("\nYou must enter between 1 and 3 letters.\n")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'Enter color keyword or a hexadecimal number for your Logo TEXT.',
                name: 'textColor',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for your Logo.',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                message: 'Enter color keyword or a hexadecimal number for your Logo BACKGROUND.',
                name: 'logoColor',
            },
        ])
        .then(answers => {
            console.log("logo.svg", answers);
        })
}

promptUser();


    // need to export answers to shape.js and finally to logo.js