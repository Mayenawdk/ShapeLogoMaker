import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js'; // Make sure to include the .js extension

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape (keyword or hexadecimal):',
    },
];

function generateSVG({ text, textColor, shape, shapeColor }) {
    let selectedShape;
    switch (shape) {
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
    }

    selectedShape.setColor(shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${selectedShape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

inquirer.prompt(questions).then(answers => {
    generateSVG(answers);
});
