// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
  } else if (License === "GPL") {
    return `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else if (License === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)`
  }
  else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if (License === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (License === "GPL") {
    return "https://opensource.org/licenses/GPL-3.0";
  }
  else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if(License === `None`){
    return "";
  }
  return `This project is licensed under the ${License} license`;
  }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
    ${data.Title}
  # Description
    ${data.Description} 
  # Installation Instructions
    ${data.Installation}
  # Usage Instructions
    ${data.Usage} 
    [See demo]('link to video here')
  # Contribution parameters 
    ${data.Contributors} 
  # Tests
    ${data.tests}
  # License
    ${renderLicenseBadge(data.License)} 
    ${renderLicenseLink(data.License)} 
    ${renderLicenseSection(data.License)}
`;
}

module.exports = generateMarkdown;
