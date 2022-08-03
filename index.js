import inquirer from 'inquirer';
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:'
    },
    {
        type: 'input',
        name: 'install-instructions',
        message: 'Installation Instructions:'
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis']
    }
  ])
  .then(data => {
    const filename = `${data.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
      err ? console.log(err) : console.log('Success!')
    );
  });