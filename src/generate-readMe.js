const generateReadMe = data => {

    let license = ""
        for(let i = 0; i < data.license.length; i++) {
            license += data.license[i] + "\r\n"
        };

return `
# ${data.title}

## Description

${data.description}

## Link to Application

${data.link}

## User Story
` + '```' +
`
AS A ${data.asA}
I WANT ${data.iWant}
SO THAT ${data.soThat}
` 
+ '```' +
`

## Screenshot

![alt text]( ---insert your screenshot here--- )

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

${license}

---

## Testing Intructions

${data.testing}

## Questions

[Github](https://github.com/${data.username})

[Email](${data.email})
`;
};

export default generateReadMe;