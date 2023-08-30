#!/usr/bin/env node

import showBanner from 'node-banner';
import chalk from 'chalk';


(async () => {
    await showBanner('Online Store Entities', 'by Hamza Waheed Abbasi');
})();

interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
}

type Cart = Product[]

interface Customer {
    id: number,
    name: string,
    email: string, 
}
type Order = {
    customer: Customer,
    cart: Cart,
}

const products: Cart = [
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
  
const customer: Customer = { 
    id: 1, 
    name: 'Hamza Waheed Abbasi', 
    email: 'hamzawaheed@gmail.com' 
};


function calPrice(cart: Cart) {
    let sum: number = 0;
    for (let i of cart){
        sum += i.price;
        console.log(chalk.bold.bgRgb(253,656,54)(`The price for the ${i.name} in cart is : ${i.price}`));
    }
    console.log('')
    console.log(chalk.yellowBright('************************'));
    console.log(chalk.bgCyanBright.bold(`Total Price is: ${sum}`));
    console.log(chalk.redBright('Thanks for shopping ', customer.name)) 
    return sum;
}
calPrice(products)