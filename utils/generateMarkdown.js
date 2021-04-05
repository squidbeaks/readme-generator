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

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'Boost 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
  if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license === 'CC0') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  if (license === 'EPL 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  if (license === 'GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'IPL 1.0') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  }
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'MPL 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if (license === 'ODC') {
    return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
  }
  if (license === 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  }
  if (license === 'Artistic 2.0') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  }
  if (license === 'OFL 1.1') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
  }
  if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  if (license === 'WTFPL') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
  }
  if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  }
};

// Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `<https://opensource.org/licenses/${license}>`
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License
  Read more about the ${license} license [here](${renderLicenseLink(license)}).
  `;
};

// Create a function to generate markdown for README
module.exports = templateData => {
  return `# ${templateData[0].title} ${renderLicenseBadge(templateData[0].license[0])}

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
