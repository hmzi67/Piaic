import { mcqs } from "./mcqs.js"

let userInput:string[] = [];
    userInput.push(mcqs['Qno1']);
    userInput.push(mcqs['Qno2']);
    userInput.push(mcqs['Qno3']);
    userInput.push(mcqs['Qno4']);
    userInput.push(mcqs['Qno5']);
    userInput.push(mcqs['Qno6']);
    userInput.push(mcqs['Qno7']);
    userInput.push(mcqs['Qno8']);
    userInput.push(mcqs['Qno9']);
    userInput.push(mcqs['Qno10']);
    
console.log(userInput)

function calculateScore(count:number):number {
    let score = 0;
    for (let x=0; x<userInput.length; x++) {
            if(userInput[x] == 'Sergey Brin' || userInput[x] == 'HyperText Markup Language' || userInput[x] == 'Sergey Brin' || userInput[x] == '<!doctype html>' || userInput[x] == 'Web browser' || userInput[x] == 'Charset in both html and xhtml is “text/html”' || userInput[x] == '<h1>' || userInput[x] == 'Convention for representing and interacting with objects in html documents' || userInput[x] == 'head tag' || userInput[x] == '<mark>'){
                score++
            } 
    }
    count = score;
    return count;
}

export { calculateScore }