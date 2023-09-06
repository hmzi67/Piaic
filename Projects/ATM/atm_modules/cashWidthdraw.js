import chalk from "chalk";
import inquirer from "inquirer";
async function otherAmmount(balance) {
    const otherAmm = await inquirer.prompt([{
            name: 'otherAmmount',
            type: 'number',
            message: 'Please enter your ammount'
        }]);
    if (otherAmm.otherAmmount < balance) {
        balance -= otherAmm.otherAmmount;
    }
    else {
        console.log("You have insufficient balance please recharge");
        balance = await otherAmmount(balance);
    }
    console.log(`You successfuly widthdraw ${otherAmm.otherAmmount} `);
    return balance;
}
async function cashWidthdraw(balance) {
    const options = await inquirer.prompt([{
            name: 'menu',
            type: 'list',
            message: 'Select your ammount',
            choices: ['500', '1000', '2000', '5000', '10000', 'Other Ammount'],
        }]);
    switch (options.menu) {
        case "500":
            if (balance > Number(options.menu)) {
                balance -= 500;
                console.log(chalk.green(`You Successfully widthdraw 500`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance please recharge"));
            }
        case "1000":
            if (balance > Number(options.menu)) {
                balance -= 1000;
                console.log(chalk.green(`You Successfully widthdraw 1000`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance please recharge"));
            }
        case "2000":
            if (balance > Number(options.menu)) {
                balance -= 2000;
                console.log(chalk.green(`You Successfully widthdraw 2000`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance please recharge"));
            }
        case "5000":
            if (balance > Number(options.menu)) {
                balance -= 5000;
                console.log(chalk.green(`You Successfully widthdraw 5000`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance please recharge"));
            }
        case "10000":
            if (balance > Number(options.menu)) {
                balance -= 10000;
                console.log(chalk.green(`You Successfully widthdraw 10000`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance please recharge"));
            }
        case "Other Ammount":
            balance = await otherAmmount(balance);
            break;
    }
    return balance;
}
export default cashWidthdraw;
