const generateReadMe = data => {
return `
# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.install}

## Usage Information

${data.usage}

## Credits

${data.contribution}

## License

${data.license}

---

## Badges

${data.badge}

## Testing Intructions

${data.testing}

## Questions

[Github](https://github.com/${data.username})

[Email](${data.email})
`;
};

export default generateReadMe;