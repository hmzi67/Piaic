// Task 1: Modeling Online Store Entities
// You're building a TypeScript application for an online store. Define the following types and interfaces:
// Define an interface Product with properties like id, name, price, and category.
// Create a type Cart that represents an array of Product objects.
// Define an interface Customer with properties like id, name, and email.
// Create a type Order that represents an object containing a Customer and a Cart.
// Implement a function that calculates the total price of products in the cart.
import showBanner from 'node-banner';
import chalk from 'chalk';
(async () => {
    await showBanner('Online Store Entities', 'by Hamza Waheed Abbasi');
})();
const products = [
    {
        id: 1,
        name: 'Milk',
        price: 200,
        category: 'Grocery',
    },
    {
        id: 2,
        name: 'Tomato',
        price: 100,
        category: 'Vegtable'
    },
    {
        id: 3,
        name: 'Laptop',
        price: 2000000,
        category: 'Electronic'
    },
];
const customer = {
    id: 1,
    name: 'Hamza Waheed',
    email: 'hamzawaheed@gmail.com'
};
function calPrice(cart) {
    let sum = 0;
    for (let i of cart) {
        sum += i.price;
        console.log(chalk.bold.bgRgb(253, 656, 54)(`The price for the ${i.name} in cart is : ${i.price}`));
    }
    console.log(chalk.yellowBright('************************'));
    console.log(chalk.bgCyanBright.bold(`Total Price is: ${sum}`));
    console.log(chalk.redBright('Thanks for shopping ', customer.name));
    return sum;
}
calPrice(products);
