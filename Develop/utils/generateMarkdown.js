// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function generateLicenseLink(license) {
  if (license) {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} License.`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = generateLicenseBadge(data.license);
  const licenseLink = generateLicenseLink(data.license);
  const licenseSection = generateLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${licenseLink}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests Instruction
${data.tests}

${licenseSection}
`;
}

module.exports = generateMarkdown;
