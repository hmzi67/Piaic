import inquirer from "inquirer";
async function cashDeposit(balance) {
    const answer = await inquirer.prompt([{
            name: 'cash',
            type: 'number',
            message: 'Enter your ammount',
        }]);
    balance += answer.cash;
    return balance;
}
export default cashDeposit;
