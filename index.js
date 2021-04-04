// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
const profileDataArgs = process.argv.slice(2);
const [title, github] = profileDataArgs;

// TODO: Create an array of questions for user input
const questions = [
    'What is your github username?',
    'Provide a description of your application.',
    'Provide installation instructions or a link to visit your project.',
    'Provide instruction on how to use your application. Include screenshots as needed.',
    'Choose what license is associated with your project.',
    'Provide instruction on how indviiduals can contribute to your project.',
    'Provide instructions on how to run tests for your project.',
    'What is your email if users of your application have questions?',
    'Were there other individuals that helped contribute to your project?',
    'List the names of other contributors to this project.',
    'What is the title of your project?'
];

// TODO: Prompt user with questions
// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: questions[10],
//             validate: titleInput => {
//                 if (titleInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your project title!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: questions[0],
//             validate: githubInput => {
//                 if (githubInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your Github username!');
//                     return false;
//                 }
//             }
//         }
//     ])
// }
    //     {
    //         type: 'input',
    //         name: 'description',
    //         message: questions[1],
    //         validate: descriptionInput => {
    //             if (descriptionInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter the description of your project!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'input',
    //         name: 'install',
    //         message: questions[2],
    //         validate: installationInput => {
    //             if (installationInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter instructions on how to visit your project or install your project!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'input',
    //         name: 'usage',
    //         message: questions[3],
    //         validate: usageInput => {
    //             if (usageInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter instructions on how to use your project!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'checkbox',
    //         name: 'licence',
    //         message: questions[4],
    //         choices: ['1', '2', '3'],
    //     },
    //     {
    //         type: 'input',
    //         name: 'contribution',
    //         message: questions[5],
    //         validate: contributionInput => {
    //             if (contributionInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter instructions on how to contribute to your project!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'input',
    //         name: 'tests',
    //         message: questions[6],
    //         validate: testInput => {
    //             if (testInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter instructions on how to run tests on your project!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'input',
    //         name: 'tests',
    //         message: questions[7],
    //         validate: testInput => {
    //             if (testInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter instructions on how to run tests on your project!');
    //                 return false;
    //             }
    //         }
    //     },
    //     {
    //         type: 'confirm',
    //         name: 'otherContributors',
    //         message: questions[8],
    //         default: false
    //     },
    //     {
    //         type: 'input',
    //         name: 'contributorNames',
    //         message: questions[9]
    //     }
    // ])
    // .then(readMeData => {
    //     return generateMarkdown(readMeData);
    //  })
//}

// TODO: Create a function to write README file
// const writeToFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/README.md', fileContent, err => {
//             // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//             if (err) {
//                 reject(err);
//                 // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//                 return;
//             }

//             // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };
// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app
init();


//promptUser()
//     .then(promptProject)
//     .then(portfolioData => {
//         return generatePage(portfolioData);
//     })
//     .then(pageHTML => {
//         return writeToFile(pageHTML);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//         return copyFile();
//     })
//     .then(copyFileResponse => {
//         console.log(copyFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });

fs.writeFile('./dist/README.md', generateMD(title, github), err => {
    if (err) throw err;

    console.log('README complete! Check out the README.md to see the output!');
})

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README