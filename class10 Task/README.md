 <h1>Difference b/w callback and promises.</h1>

<h3>Call backs:</h3>
    <h4>Syntax: </h4>
        Callbacks are functions that are passed as arguments to other functions and are executed once the asynchronous operation is complete.
    <h4>Readability:</h4>
        Callbacks can lead to callback hell or pyramid of doom when dealing with multiple asynchronous operations, making the code less readable and maintainable.
   <h4> Error Handling: </h4>
        Error handling in callback-based code can be challenging as errors need to be passed as separate callback arguments.

<h3>Promises:</h3>
    <h4>Syntax: </h4>
        Promises provide a more structured way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never. Promises have methods like then and catch to handle success and error cases.
   <h4> Readability: </h4>
        Promises offer a more linear and readable code structure, especially when chaining multiple asynchronous operations using .then().
    <h4>Error Handling: </h4>
        Error handling is cleaner with Promises using the .catch() method, which makes it easier to manage errors in asynchronous code. 

