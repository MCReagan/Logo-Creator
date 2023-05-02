class Shape {
    constructor(logoColor, text, textColor) {
        this.logoColor = logoColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.logoColor}" />`;
    }
}

class Square extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.logoColor}" />`;
    }
}

class Circle extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.logoColor}" />`;
    }
}

module.exports = { Shape, Triangle, Square, Circle };