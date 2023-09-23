
import inquirer from "inquirer";

async function call() {
    const answer = await inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Do you want to add student?',
            choices: ['yes', 'no']
        }
    ]);
    let str = answer.choices;
    str === 'yes' ? enrollement(str) : console.log("Thanks for comming")
}
type Student = {
    name: string,
    courseTitle: string
}


let students:Array<object>;
async function enrollement(input: string) {
    do{
        const answer = await inquirer.prompt([
            {
                name: 'studentName',
                type: 'input',
                message: 'Enter your full name: '
            },
            {
                name: 'courses',
                type: 'list',
                message: 'Select your course: ',
                choices: ['Computer Engineering', 'Software Engineering', 'Information Technology']
            },
            {
                name: 'choices',
                type: 'list',
                message: 'Do you want to add new student?',
                choices: ['yes', 'no']
            }
        ]);
        let obj:Student = {
            name: answer.studentName,
            courseTitle: answer.courses
        }
        students.push(obj)
        answer.choices === 'no' ? input = 'no' : input = 'yes';
    }while(input !== 'no');
    console.log(students)
}
call()