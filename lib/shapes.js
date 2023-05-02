const promptUser = require('../index.js');

class Shape {
    constructor(logoColor, text, textColor) {
        promptUser.logoColor = logoColor;
        promptUser.text = text;
        promptUser.textColor = textColor;
    }
}

class Triangle extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />`;
    }
}

class Square extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.logoColor}" />`;
    }
}

class Circle extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.logoColor}" />`;
    }
}

module.exports = { Triangle, Square, Circle };