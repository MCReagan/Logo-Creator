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
                        return console.log(answer, "\nYou must enter a css color keyword or hex code");
                    }
                    return true;
                }
            },
        ])
        .then((response) => {
            const completeLogo = makeLogo(response);
        })
        .catch(err => {
            console.log(err)
        });
}

const makeLogo = (response) => {
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
    response.shape = logo;
    console.log(response)
}

module.exports = promptUser;













// const makeLogo = (shape) => {
//     return `
//     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//     ${shape.render()}
//     <text
//       x="50%"
//       y="${shape.logoShape != "triangle" ? "50%" : "40%"}"
//       text-anchor="middle"
//       fill="${shape.textColor}"
//       font-size="2.3rem" letter-spacing="2" dy=".3em"
//       font-family="monospace">${shape.logoName}
//     </text>
//   </svg>
//   `;
// };

// module.exports = {makeLogo};