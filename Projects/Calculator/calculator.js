// Name     :   Hamza Waheed Abbasi
//Roll no   :   PIAIC215406
//Batch     :   48
//City      :   Islamabad
//Email     :   hamzawaheed057@gmail.com
//importing inquirer
import inquirer from "inquirer";
//importing chalk
import chalk from 'chalk';
//importing operators
import * as addModule from "./operatorModules/add.js";
import * as subtractModule from "./operatorModules/subtract.js";
import * as multiplyModule from "./operatorModules/multiply.js";
import * as divideModule from "./operatorModules/divide.js";
const operations = ['add', 'sub', 'multiply', 'divide'];
const selectOperator = await inquirer.prompt([{
        name: 'operation',
        type: 'list',
        message: 'please select an operator',
        choices: operations,
    }]);
let selectedOperator = selectOperator.operation;
const number1 = await inquirer.prompt([{
        type: 'input',
        name: 'firstNum',
        message: 'Enter a first number: '
    }]);
let num1 = parseFloat(number1.firstNum);
const number2 = await inquirer.prompt([{
        type: 'input',
        name: 'secondNum',
        message: 'Enter a second number: '
    }]);
let num2 = parseFloat(number2.secondNum);
let evaluate;
switch (selectedOperator) {
    case 'add':
        evaluate = addModule.add;
        break;
    case 'sub':
        evaluate = subtractModule.subtract;
        break;
    case 'multiply':
        evaluate = multiplyModule.multiply;
        break;
    case 'divide':
        evaluate = divideModule.divide;
        break;
    default:
        throw new Error('invalid seleciton');
}
let result = evaluate(num1, num2);
console.log('********************************');
console.log(chalk.bgRedBright.bold(`Result: ${result}`));
console.log('********************************');
