# SVG Logo Maker

## Description
I created this command-line tool to quickly generate a simple SVG logo. The app lets you choose the text, text color, shape, and shape color, then generates a logo in SVG format. This is especially useful for small web projects where you need a logo fast without hiring a designer.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Tech Used](#tech-used)
- [License](#license)

## Installation
To get started:

1. Clone the repository:
   ```bash
   git clone <repo-url>
Navigate into the project folder:

bash
Copy code
cd svg-logo-maker
Install the necessary dependencies:

bash
Copy code
npm install
Usage
Here’s how you can generate your own logo:

Run the application:

bash
Copy code
node index.js
Follow the prompts:

Enter up to 3 characters for the logo text.
Provide a text color (either a keyword or hex code).
Choose a shape (Circle, Triangle, or Square).
Enter a color for the shape (keyword or hex code).
After you finish the prompts, a file named logo.svg will be created in the project folder.

Open the logo.svg file in your browser to check out the logo you just generated.

Tests
I’ve written tests to ensure the shapes render correctly. To run the tests, use:

bash
Copy code
npm test
All tests should pass if everything is set up correctly.

Tech Used
Node.js
Inquirer (for the user prompts)
Jest (for testing)
License
This project is licensed under the MIT License.