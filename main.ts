#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import { allChoices, allQuestions, allRightAnswers } from "./alvariables.js"
console.log(chalk.yellowBright(`-----------------QUIZ-------------`));

//asking the user his name
const name = await inquirer.prompt({
    type: "input",
    name: "input",
    message: "Enter your name:"
})

async function startQuiz() {
    let levelType = await inquirer.prompt({
        type: "list",
        name: "level",
        message: "Select difficulty level(use arrow keys)",
        choices: ["Easy", "Intermediate", "Difficult"]
    })

    let type:"easy"|"intermediate"|"difficult";
if(levelType.level=="Easy"){
type= "easy"
}
else if(levelType.level=="Intermediate"){
    type="intermediate"
}
else{
    type="difficult"
}
    let currentQuestions = allQuestions[type]
    let currentChoices = allChoices[type]
    let currentRightAnswers = allRightAnswers[type]

    let score = 0;

    for (let i = 0; i < currentQuestions.length; i++) 
    {const question = currentQuestions[i];
        const options = currentChoices[i];

        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question,
                choices: options,
            },
        ]);

        if (answer.userAnswer === currentRightAnswers[i]) {
            score++;
        }
    }
    console.log(`Your score: ${score} out of ${currentQuestions.length}`);

    const reAttempt = await inquirer.prompt([{
        type: "list",
        name: "input",
        message: "Would you like to reAttempt quiz",
        choices: ["Yes", "No"]
    }])
    if (reAttempt.input == "Yes") {
        startQuiz()
    }
}
startQuiz()


