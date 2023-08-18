import { calculateScore } from "./modules/calculateScore.js";
import { mcqs } from "./modules/mcqs.js";
import chalk from 'chalk';



console.log(chalk.bold.yellow(`*********************************************************************`))
console.log(chalk.bold.yellow("****************** Welcome to Quiz Application **********************"));
console.log(chalk.bold.yellowBright(`********************* by HAMZA WAHEED ABBSI *************************`))
console.log('')

console.log(chalk.bgYellowBright.bold.black(` Your can check your inputs... `))
console.log('')

for (let x in mcqs) {
    console.log(chalk.bgGray.bold.black("\t ",x+": ",mcqs[x]))
}

console.log('')
console.log(chalk.bgYellowBright.bold.black(` ******************* Result ******************* `))
console.log(chalk.bold.yellow(`Your Score is ${calculateScore(0)}`))
