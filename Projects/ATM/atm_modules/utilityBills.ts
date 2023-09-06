import chalk from "chalk";
import inquirer from "inquirer";

const Gas = Math.floor(Math.random() * 1000+1);
const Electricity = Math.floor(Math.random() * 1000+1);
const Water = Math.floor(Math.random() * 1000+1);

async function utilityBills(balance: number){
    const answer = await inquirer.prompt([{
        name: 'billType',
        type: 'list',
        choices: ['Electricity', 'Gas', 'Water'],
        message: 'Select your bill type'
    },
]);
    switch(answer.billType){
        case 'Electricity':
            console.log(chalk.bgBlack.bold.yellowBright(`Your Bill is: ${Electricity}`));
            balance -= Electricity;
            break;
        case 'Gas':
            console.log(chalk.bgBlack.bold.yellowBright(`Your Bill is: ${Gas}`));
            balance -= Gas;
            break;
        case 'Water':
            console.log(chalk.bgBlack.bold.yellowBright(`Your Bill is: ${Water}`));
            balance -= Water;
            break;
    }
    return balance;
};

export default utilityBills;