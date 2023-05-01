const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter one to three characters for your Logo.',
                name: 'name',
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
            if (answers.name.length > 3 || answers.name.length === 0) {
                console.log("You must enter between 1 and 3 letters.")
                promptUser();
            }
        })
}

promptUser();


    // need to export answers to shape.js and finally to logo.js