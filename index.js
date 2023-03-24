import inquirer from 'inquirer';
import * as fs from 'fs';

import generateReadMe from './src/generate-readMe.js'
import { title } from 'process';

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
            name: 'link',
            message: 'Link to Application:'
        },
        {
            type: 'input',
            name: 'asA',
            message: 'Your User Story; AS A'
        },
        {
            type: 'input',
            name: 'iWant',
            message: 'I WANT'
        },
        {
            type: 'input',
            name: 'soThat',
            message: 'SO THAT'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Installation Instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage Information:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution Guidelines:'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Testing Instructions:'
        },
        {
            type: 'checkbox',
            message: 'Choose a License if applicable:',
            name: 'license',
            choices: ['Apache License 2.0', 'Berkeley Software Distribution (BSD)', 'MIT License', 'GNU General Public License, version 3 (GPLv3)', 'None']
            },
        {
            type: 'input',
            name: 'username',
            message: 'Github Username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address:'
        }
    ])
    .then(data => {
        fs.writeFile(`${data.title}.md`, generateReadMe(data), err => {
            if (err) throw err;
        });
});