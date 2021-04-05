// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `<https://opensource.org/licenses/${license}>`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License
  Read more about the ${license} license [here](${renderLicenseLink(license)}).
  `;
};

// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  return `# ${templateData[0].title} [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  ## Description
  ${templateData[0].description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${templateData[0].install}

  ## Usage
  ${templateData[0].usage}
  
  ${renderLicenseSection(templateData[0].license[0])}
  
  ## Contributing
  ${templateData[0].contribution}

  ## Tests
  ${templateData[0].tests}

  ## Questions?
  Reach me at [Github](https://github.com/${templateData[0].github}) or [email](${templateData[0].email})!
  `;
};
