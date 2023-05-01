const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter one to three characters for your Logo.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What color would you like your Logo to be?',
            name: 'color',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your Logo.',
            choices: ['Circle', 'Triangle', 'Square']
        },
    ])
    .then(answers => {
        console.log(answers.name, answers.color, answers.shape)
    })