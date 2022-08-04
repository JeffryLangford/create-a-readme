import inquirer from 'inquirer';
import * as fs from 'fs';

import generateReadMe from './src/generate-readMe.js'

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
            message: 'Choose your License:',
            name: 'license',
            choices: ['Apache License 2.0', 'Berkeley Software Distribution (BSD)', 'MIT License', 'GNU General Public License, version 3 (GPLv3)']
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
        fs.writeFile('READ.md', generateReadMe(data), err => {
            if (err) throw err;
        });
});