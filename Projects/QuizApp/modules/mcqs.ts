import inquirer from "inquirer";

const mcqs = await inquirer.prompt([{
        name: "Qno1",
        type: "list",
        message: "Who is the father of HTML?", 
        choices: ['Rasmus Lerdorf','Tim Berners-Lee', 'Brendan Eich', 'Sergey Brin'] ,
        correctIndex: 3,
    },
    {
        name: "Qno2",
        type: "list",
        message: "HTML stands for __________", 
        choices: ['HyperText Marking Language','HighText Marking Language', 'HyperText Machine Language', 'HyperText Markup Language'] ,
        correctIndex: 1,
    },
    {
        name: "Qno3",
        type: "list",
        message: "Who is the father of HTML?", 
        choices: ['Rasmus Lerdorf','Tim Berners-Lee', 'Brendan Eich', 'Sergey Brin'] ,
        correctIndex: 3,
    },
    {
        name: "Qno4",
        type: "list",
        message: "What is the correct syntax of doctype in HTML5?", 
        choices: [' <!doctype html>','<doctype html!>', '<doctype html>', '</doctype html>'] ,
        correctIndex: 3,
    },
    {
        name: "Qno5",
        type: "list",
        message: "Which of the following is used to read an HTML page and render it?", 
        choices: ['Web matrix','Web browser', 'Web network', 'Web server'] ,
        correctIndex: 1,
    },
    {
        name: "Qno6",
        type: "list",
        message: "Which of the following is not a difference between HTML and XHTML?", 
        choices: ['Charset in both html and xhtml is “text/html”','Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”', 'Tags and attributes are case-insensitive in HTML but not in XHTML', ' Special characters must be escaped using character entities in XHTML unlike HTML'] ,
        correctIndex: 0,
    },
    {
        name: "Qno7",
        type: "list",
        message: " Which of the following tag is used for inserting the largest heading in HTML?", 
        choices: [' <h6>','<h1>', 'head', 'h4'] ,
        correctIndex: 1,
    },
    {
        name: "Qno8",
        type: "list",
        message: "What is DOM in HTML?", 
        choices: ['Language dependent application programming','Hierarchy of objects in ASP.NET', 'Application programming interface', 'Convention for representing and interacting with objects in html documents'] ,
        correctIndex: 3,
    },
    {
        name: "Qno9",
        type: "list",
        message: " In which part of the HTML metadata is contained?", 
        choices: ['body tag','html tag', 'title tag', 'head tag'] ,
        correctIndex: 3,
    },
    {
        name: "Qno10",
        type: "list",
        message: "Which element is used to get highlighted text in HTML5?", 
        choices: ['<b>','<highlight>', '<mark>', '<u>'] ,
        correctIndex: 2,
    },
]);

export { mcqs }
