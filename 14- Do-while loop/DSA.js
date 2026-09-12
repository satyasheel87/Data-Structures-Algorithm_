// Do-while loop 

let prompt = require('prompt-sync')()
let computer;
let user;
do{
    computer = Math.floor(Math.random() * 100 + 1)
    console.log("Hello world")
    console.log(computer)
    user = Number(prompt("Enter a number: "))
}while (computer === user)