const { promptUser, setShape, makeLogo } = require('./logo.js');
const { Triangle, Circle, Square, Shape } = require('./shapes.js');

describe('setShape', () => {
    it('should return value for logoShape depending on user input', () => {
        const response = `{ name: 'JKL', textColor: 'blue', shape: 'Circle', logoColor: 'blue' }`
        console.log(setShape(response))
        expect(setShape(response)).toEqual({
            name: 'JKL',
            textColor: 'blue',
            shape: 'Circle',
            logoColor: 'blue',
            setShape: '<circle cx="50" cy="50" r="40" fill="blue" />'
        })
    });
});

describe('makeLogo', () => {
    it('should create an svg layout using user provided information', () => {
        const response = {
            name: 'JKL',
            textColor: 'blue',
            shape: 'Circle',
            logoColor: 'green',
            setShape: '<circle cx="50" cy="50" r="40" fill="green" />'
        }
        const finalLogo = makeLogo(response)
        expect(finalLogo).toEqual(`{
< svg viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg" width = "300" height = "200" >
<circle cx="50" cy="50" r="40" fill="green" />
<text
    x="50"
    y="50"
    text-anchor="middle"
    fill="blue"
    font-size="2.3rem" letter-spacing="1" dy=".3em"
    font-family="monospace">JKL
</text>
</svg >
}`)

    })
})