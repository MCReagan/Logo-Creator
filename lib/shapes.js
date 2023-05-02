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
        return `<polygon points="150,18 244,182 56,182" fill="${this.logoColor}" />`;
    }
}

class Square extends Shape {
    constructor(logoColor, text, textColor) {
        super(logoColor, text, textColor);
    };
    render() {
        return `<rect x="50" y="50" width="160" height="160" fill="${this.logoColor}" />`;
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

module.exports = { Triangle, Square, Circle };