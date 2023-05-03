// this class creates our shape object from given values inputted by the user
class Shape {
    constructor(logoColor, text, textColor) {
        this.logoColor = logoColor;
        this.text = text;
        this.textColor = textColor;
    }
}

// this class adds a property of setShape using the switch case on logo.js if the user selected triangle
class Triangle extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.logoColor}" />`;
    }
}

// this class adds a property of setShape using the switch case on logo.js if the user selected square
class Square extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.logoColor}" />`;
    }
}

// this class adds a property of setShape using the switch case on logo.js if the user selected circle
class Circle extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.logoColor}" />`;
    }
}

// this exports classes to logo.js and to shapes.test.js
module.exports = { Shape, Triangle, Square, Circle };