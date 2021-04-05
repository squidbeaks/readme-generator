// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


// function generateMD(title, github) {
module.exports = templateData => {
  console.log(templateData);
  console.log(templateData[0].title);
  console.log(templateData[0].description);
  console.log(templateData[0].github);


  return `# ${templateData[0].title}

  ## Description
  ${templateData[0].description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)

  ## Installation
  ${templateData[0].install}

  ## Usage
  ${templateData[0].usage}

  ## License
  ${templateData[0].license}

  ## Contributing
  ${templateData[0].contribution}

  ## Tests
  ${templateData[0].tests}

  ## Questions?
  Reach me at Github or email!
  Github: <https://github.com/${templateData[0].github}>
  Email me at: <${templateData[0].email}>
  `;
};
