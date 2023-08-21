import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        name: "guess",
        type: "number",
        message: "Enter the Guessed Number:"
    }
]);
let num = Math.random() * 10;
let num1 = Math.floor(num);
console.log(chalk.bold(chalk.blue("Welcome To Number Guessing Game")));
console.log(chalk.red("Hint number will be Between 1 to 10"));
if (answers.guess === num1) {
    console.log(chalk.bgBlue("Congats!! You Guessed the Correct Number.."));
}
else {
    console.log(chalk.bgBlue("Try Again.."));
}
