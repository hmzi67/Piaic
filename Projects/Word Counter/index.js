import inquirer from "inquirer";
let char = 0;
let wordCount = 0;
async function wordCounter() {
    const answer = await inquirer.prompt([{
            name: "inputYourText",
            type: "input",
            message: "Please enter your message"
        }]);
    let str = answer.inputYourText.trim(' ');
    console.log(str);
    char = str.length;
    wordCount = str.split(' ').length;
    console.log(`You entered ${wordCount} words and ${char} characters`);
}
wordCounter();
