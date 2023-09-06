#!/usr/bin/env node
import showBanner from "node-banner";
import { mostLikedPost }  from "./module/mostLikedPost.js";
import chalk from 'chalk';


showBanner('Social Media Platform', 'developed by Hamza Waheed Abbasi')

console.log(chalk.yellow(`**************************************`))
mostLikedPost()
console.log(chalk.green(`**************************************`))


