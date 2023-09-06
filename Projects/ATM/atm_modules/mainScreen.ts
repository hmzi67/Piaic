import inquirer from "inquirer";
import cashWidthdraw from "./cashWidthdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import utilityBills from "./utilityBills.js";
import chalk from 'chalk';

async function anotherTransaction(){
    const anotherTrans = await inquirer.prompt([{
        name: 'anotherTransaction',
        type: 'list',
        choices: ['Yes', 'No'],
        message: 'Do you want another transaction?'
    }]);
    return anotherTrans.anotherTransaction;
}

async function mainScreen(balance:number){
    do{
        const option = await inquirer.prompt([
        {
            name: 'Menu',
            type: 'list',
            message: 'Please select your transaction type',
            choices: ['Cash Widthdraw','Cash Deposit', 'Balance Inquiry', 'Transfer', 'Utility bill', 'Exit'],
        },
    ]);
    
        switch (option.Menu){
            case 'Cash Widthdraw':
                balance = await cashWidthdraw(balance);
                break;
            case 'Cash Deposit':
                balance = await cashDeposit(balance);
                break;
            case 'Balance Inquiry':
                console.log(chalk.yellowBright('Your transactional is successfull and your new balance is', balance));
                break;
            case 'Transfer':
                balance = await transfer(balance);
                break;
            case 'Utility bill':
                balance = await utilityBills(balance);
                break;
        }
        if(option.Menu == 'Exit'){
            console.log(chalk.yellowBright('Your transactional is successfull and your new balance is', balance));
            break;
        }else{
        var anotherTran = await anotherTransaction();
        }
    }while(anotherTran != 'No'){
        console.log(chalk.blue('Thanks for comming...'))
    }
}
export default mainScreen;