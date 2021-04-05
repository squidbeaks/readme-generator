// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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

const licenses = [
    {
        name: 'Apache 2.0',
        badgeUrl: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    },
    {
        name: 'Boost 1.0',
        badgeUrl: 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    },
    {
        name: 'BSD 3-Clause',
        badgeUrl: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
    }
    // {
    //     name: 'CC0',
    //     badgeUrl: 
    // },
    // {
    //     name: 'EPL 1.0',
    //     badgeUrl: 
    // },
    // {
    //     name: 'GPLv3',
    //     badgeUrl: 
    // },
    // {
    //     name: 'IPL 1.0',
    //     badgeUrl: 
    // },
    // {
    //     name: 'ISC',
    //     badgeUrl: 
    // },
    // {
    //     name: 'MIT',
    //     badgeUrl: 
    // },
    // {
    //     name: 'MPL 2.0',
    //     badgeUrl: 
    // },
    // {
    //     name: 'ODC',
    //     badgeUrl: 
    // },
    // {
    //     name: 'Perl',
    //     badgeUrl: 
    // },
    // {
    //     name: 'Artistic 2.0',
    //     badgeUrl: 
    // },    
    // {
    //     name: 'OFL 1.1',
    //     badgeUrl: 
    // },    
    // {
    //     name: 'Unlicense',
    //     badgeUrl: 
    // },
    // {
    //     name: 'WTFPL',
    //     badgeUrl: 
    // },
    // {
    //     name: 'Zlib',
    //     badgeUrl: 
    // }
];

// TODO: Prompt user with questions
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

// GIVEN a command-line application that accepts user input
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
