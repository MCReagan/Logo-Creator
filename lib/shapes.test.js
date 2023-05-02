const { Triangle , Circle , Square , Shape } = require('./shapes.js');

describe('Shapes', () => {
    it('should create an object with the user inputted values', () => {
        const shape = new Shape('blue', 'hello', 'blue');
        expect(shape).toEqual({"logoColor": "blue", "text": "hello", "textColor": "blue"})
    });
});

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return value of `<polygon points="50,0 0,100 100,100" fill="${this.logoColor}" />', () => {
            const shape = new Triangle('blue', 'hello', 'blue');
            expect(shape.render()).toEqual('<polygon points="50,0 0,100 100,100" fill="blue" />')
        });
    });
});

describe('Shapes', () => {
    describe('Square', () => {
        it('should return value of `<rect x="10" y="10" width="80" height="80" fill="${this.logoColor}" />', () => {
            const shape = new Square('blue', 'hello', 'blue');
            expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="blue" />')
        });
    });
});

describe('Shapes', () => {
    describe('Circle', () => {
        it('should return value of `<circle cx="50" cy="50" r="40" fill="${this.logoColor}" />', () => {
            const shape = new Circle('blue', 'hello', 'blue');
            expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />')
        });
    });
});