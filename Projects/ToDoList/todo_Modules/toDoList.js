#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function myToDo(toDo) {
    let bool = true;
    while (bool) {
        const answer = await inquirer.prompt([{
                name: 'myTodo',
                type: 'input',
                message: "Please add your todo's",
            },
            {
                name: 'addmore',
                type: 'list',
                choices: ['y', 'n'],
                message: 'Do you want to add more?'
            },
        ]);
        toDo.push(answer.myTodo);
        if (answer.addmore == 'n') {
            bool = false;
        }
        else if (answer.addmore == 'y') {
            bool = true;
        }
    }
    console.log(chalk.green(`Your ToDo List is: `));
    let count = 0;
    toDo.forEach(x => {
        count++;
        console.log(count, ': ', x);
    });
}
export default myToDo;
