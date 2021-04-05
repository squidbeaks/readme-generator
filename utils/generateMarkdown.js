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
		// for (let i = 0; i < licenses.length; i++) {
		// 	switch (licenses[i]) {
		// 		case 'Apache 2.0':
		// 			return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
		// 		case 'Boost 1.0':
		// 			return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
		// 		case 'BSD 3-Clause':
		// 			return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
		// 		case 'CC0':
		// 			return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
		// 		case 'EPL 1.0':
		// 			return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
		// 		case 'GPLv3':
		// 			return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
		// 		case 'IPL 1.0':
		// 			return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
		// 		case 'ISC':
		// 			return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
		// 		case 'MIT':
		// 			return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
		// 		case 'MPL 2.0':
		// 			return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
		// 		case 'ODC':
		// 			return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
		// 		case 'Perl':
		// 			return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
		// 		case 'Artistic 2.0':
		// 			return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
		// 		case 'OFL 1.1':
		// 			return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
		// 		case 'Unlicense':
		// 			return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
		// 		case 'WTFPL':
		// 			return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
		// 		case 'Zlib':
		// 			return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
		// 		default : 
		// 			return '';
		// 	}
		// }
    if (license === 'CCO') {
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    }
};

  // if (!license) {
  //   return '';
  // }

  // return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
//}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `<https://opensource.org/licenses/${license}>`
}

// TODO: Create a function that returns the license section of README
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
  console.log(templateData[0].license[0])
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
