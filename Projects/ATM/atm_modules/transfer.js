import chalk from "chalk";
import inquirer from "inquirer";
async function transfer(balance) {
    const answer = await inquirer.prompt([
        {
            name: 'accountNumber',
            type: 'number',
            message: "Enter reciver's account number",
        },
        {
            name: 'ammount',
            type: 'number',
            message: "Enter ammount",
        },
        {
            name: 'purpose',
            type: 'list',
            message: "Payment purpose",
            choices: ['online payment', 'school fee', 'medical payment', 'other']
        },
    ]);
    if (balance > answer.ammount) {
        balance -= answer.ammount;
    }
    else {
        console.log(chalk.red('You have insufficient balance'));
        transfer(balance);
    }
    return balance;
}
;
export default transfer;
