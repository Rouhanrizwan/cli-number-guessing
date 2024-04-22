#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number.

// 2) user input for  guessing number

// 3) copare user input winh computer generated number and show result.

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("welxome to the number guessing  game");

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Plese guess a number between 1 - 6 :",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("congratulation!! you guess right number.");
} else {
  console.log("you guess wrong number.");
}
