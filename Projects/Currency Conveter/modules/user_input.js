import inquirer from "inquirer";
import chalk from "chalk";
async function userInput() {
    const userInput = await inquirer.prompt([
        {
            name: "currencyOptions",
            type: "list",
            choices: ["Doller to PKR", "PKR to Doller"],
            message: "Select your option: "
        },
    ]);
    if (userInput.currencyOptions == 'Doller to PKR') {
        const answer = await inquirer.prompt([
            {
                name: 'usd',
                type: 'number',
                message: 'Enter your ammount in USD: ',
            },
        ]);
        let pkr = Math.ceil(answer.usd * 306.0681);
        console.log(chalk.green(`Your ${answer.usd} doller in Pakistani rupees are: ${pkr} rupees `));
    }
    else if (userInput.currencyOptions == 'PKR to Doller') {
        const answer = await inquirer.prompt([
            {
                name: 'pkr',
                type: 'number',
                message: 'Enter your ammount in PKR: ',
            },
        ]);
        let doller = Math.ceil(answer.pkr / 306.0681);
        console.log(chalk.yellow(`Your ${answer.pkr} Pakistani rupees in Doller are: ${doller} doller `));
    }
}
export default userInput;
