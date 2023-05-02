const inquirer = require('inquirer');
const fs = require('fs');
const isCss3Color = require("is-css3-color");
const { Triangle, Square, Circle } = require("./lib/shapes");

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
                message: 'Enter color keyword or a hexadecimal number for your Logo TEXT.  Use lowercase only.',
                name: 'textColor',
                validate: (answer) => {
                    if (!isCss3Color(answer)) {
                        return console.log("\nYou must enter a css color keyword or hex code");
                    }
                    return true;
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for your Logo.',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                message: 'Enter color keyword or a hexadecimal number for your Logo BACKGROUND. Use lowercase only.',
                name: 'logoColor',
                validate: (answer) => {
                    if (!isCss3Color(answer)) {
                        return console.log(answer,"\nYou must enter a css color keyword or hex code");
                    }
                    return true;
                }
            },
        ])
        .then((response) => {
            console.log(response);            
        })
        .catch(err => {
            console.log(err)
        });
}


promptUser();

// need to export answers to shape.js and finally to logo.js