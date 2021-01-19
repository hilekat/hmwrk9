const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Project Description: "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Project Usage?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributors of this projects: "
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have a problem? "
        },
        {
            type: "input",
            name: "username",
            message: "GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        }
    ]);
} 


  async function init() {
    try {
  
        const answers = await promptUser();
        const generateContent = generateReadme(answers);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  