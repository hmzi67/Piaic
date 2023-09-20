import inquirer from "inquirer";
import chalk from "chalk";

let char: number = 0;
let wordCount:number = 0;

async function wordCounter () {
    const answer = await inquirer.prompt([{
        name: "inputYourText",
        type: "input",
        message: "Please enter your message"
    }]);

    let str:string = answer.inputYourText.trim(' ');
    console.log(str)
    char = str.length;
    wordCount = str.split(' ').length;
    console.log(chalk.green(`You entered ${wordCount} words and ${char} characters`))
}
wordCounter()