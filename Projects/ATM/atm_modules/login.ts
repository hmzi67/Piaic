import users from "./users.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
import chalk from "chalk";

async function login() {
    const answer = await inquirer.prompt([
        {
            name: 'accountNumber',
            type: 'number',
            message: 'Please enter your account number'
        },
        {
            name: 'pin',
            type: 'password',
            message: 'Please enter your pin'
        }
]);

let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);


if(typeof user != 'undefined'){
    console.log(chalk.bgBlueBright(`*** ******************** ***`));
    console.log(chalk.bgBlueBright.blackBright.bold(`*** Welcome ${user.name} ***`));
    console.log(chalk.bgBlueBright(`*** ******************** ***`));
    mainScreen(user.balance);
}else {
    console.log(chalk.red.bold('You entered invalid account number or pin'));
}
}

export default login;