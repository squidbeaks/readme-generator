// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    'What is your github username?',
    'What is your email?',
    'What is the title of your application?',
    'Provide a description of your application.',
    'Provide installation instructions for your application.',
    'Provide instruction on how to use your application.',
    'Choose what license is associated with your project.',
    'Provide instruction on how individuals can contribute to your application.',
    'Provide instructions on how to run tests for your application.',
];

// Array of licenses
const licenses = [
    'Apache 2.0',
    'Boost 1.0',
    'BSD 3-Clause',
    'CC0',
    'EPL 1.0',
    'GPLv3',
    'IPL 1.0',
    'ISC',
    'MIT',
    'MPL 2.0',
    'ODC',
    'Perl',
    'Artistic 2.0',
    'OFL 1.1',
    'Unlicense',
    'WTFPL',
    'Zlib',
];

// Prompt user with questions
const promptUser = readMeData => {
    if (!readMeData) {
        readMeData = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: questions[0],
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2],
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: questions[4],
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter instructions on how to visit your project or install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[5],
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions on how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[6],
            choices: licenses,
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[7],
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter instructions on how to contribute to your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[8],
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter instructions on how to run tests on your project!');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        readMeData.push(answers);
        return readMeData;
    });
}

promptUser()
    .then(readMeData => {
        const pageContent = generateMD(readMeData);

    fs.writeFile('./dist/README.md', pageContent, err => {
        if (err) throw err;

     console.log('README complete! Check out the README.md to see the output!');
    });
});
