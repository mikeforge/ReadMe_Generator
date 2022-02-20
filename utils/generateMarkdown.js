// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
  } else if (license === "GPL") {
    return `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "GPL") {
    return "https://opensource.org/licenses/GPL-3.0";
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
