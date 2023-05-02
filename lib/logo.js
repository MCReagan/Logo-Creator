const inquirer = require('inquirer');
const fs = require('fs');
const isCss3Color = require("is-css3-color");
const shape = require('./shapes')

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
                message: 'Enter color keyword or a hexadecimal number for your Logo TEXT. Use lowercase only.',
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
                        return console.log(answer, "\nYou must enter a css color keyword or hex code");
                    }
                    return true;
                }
            },
        ])
        .then((response) => {
            setShape(response);
        })
        .catch(err => {
            console.log(err)
        });
}

const setShape = (response) => {
    let logoShape;
    switch (response.shape) {
        case 'Circle':
            logoShape = new shape.Circle(response.logoColor, response.name, response.textColor)
            break;
        case 'Triangle':
            logoShape = new shape.Triangle(response.logoColor, response.name, response.textColor)
            break;
        case 'Square':
            logoShape = new shape.Square(response.logoColor, response.name, response.textColor)
            break;
        default:
            console.log("Error: Invalid shape choice");
            return;
    }
    const logo = logoShape.render();
    response.setShape = logo;
    makeLogo(response)
}

const makeLogo = (response) => {
    const finalLogo = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${response.setShape}
<text
    x="${response.shape != "Triangle" ? "50" : "53"}"
    y="${response.shape != "Triangle" ? "50" : "70"}"
    text-anchor="middle"
    fill="${response.textColor}"
    font-size="${response.shape != "Triangle" ? "2.3rem" : "1.9rem"}" letter-spacing="1" dy=".3em"
    font-family="monospace">${response.name}
</text>
</svg>
`;
    fs.writeFile('./dist/logo.svg', finalLogo, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    )
};

module.exports = promptUser;














