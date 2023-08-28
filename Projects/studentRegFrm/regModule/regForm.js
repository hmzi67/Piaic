import inquirer from "inquirer";
const regFrm = await inquirer.prompt([
    {
        name: 'First Name',
        type: 'input',
        message: 'What is your first name?',
    },
    {
        name: 'Last Name',
        type: 'input',
        message: 'What is your last name?',
    },
    {
        name: 'Age',
        type: 'number',
        message: 'What is your Age?',
    },
    {
        name: 'Email',
        type: 'input',
        message: 'What is your Email?',
    },
    {
        name: 'CNIC',
        type: 'number',
        message: 'What is your CNIC?',
    },
]);
let address = await inquirer.prompt([
    {
        name: 'city',
        type: 'input',
        message: 'city name???'
    },
    {
        name: 'Sector',
        type: 'input',
        message: 'Sector name???'
    },
    {
        name: 'street',
        type: 'number',
        message: 'street number???'
    },
    {
        name: 'house',
        type: 'number',
        message: 'house number???'
    },
]);
let student = [];
let ad = [];
student.push(regFrm);
ad.push(address);
for (let x in ad) {
    student.push(ad[x]);
}
let studentRegForm = student;
export { studentRegForm };
