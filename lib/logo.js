// variables import required modules inquirer, fs, and isCss3Color as well as shapes.js
const inquirer = require('inquirer');
const fs = require('fs');
const isCss3Color = require("is-css3-color");
const shape = require('./shapes')

// promptUser prompts the user and creates an object with name response that contains user inputted values
function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter one to three characters for your Logo.',
                name: 'name',
                // validate makes sure the user enters betwee 1 and 3 characters
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
                // validate makes sure a color keyword or hex value is entered
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
                // validate makes sure a color keyword or hex value is entered
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

// setShape adds a property of setShape to the response object and the switch case makes sure the correct logoShape is created given user inputted shape. logoShape.render() then adds the necessary code for creating the logo shape and we add to response object
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
    return (response)
}

// makeLogo creates the layout for the final SVG logo with pertinent information such as text and colors, as well as sets the proper layout for the shape chosen by the user
const makeLogo = (response) => {
    const finalLogo = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${response.setShape}
<text
    x="50"
    y="${response.shape != "Triangle" ? "50" : "70"}"
    text-anchor="middle"
    fill="${response.textColor}"
    font-size="${response.shape != "Triangle" ? "2.3rem" : "1.9rem"}" letter-spacing="1" dy=".3em"
    font-family="monospace">${response.name}
</text>
</svg>
`;
fileCreate(finalLogo)
return finalLogo
};

// writeFile creates our svg logo from the finalLogo variable value
const fileCreate = (finalLogo) => {
    fs.writeFile('./dist/logo.svg', finalLogo, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    )
}

// this exports functions for testing purposes
module.exports = { promptUser , setShape , makeLogo };