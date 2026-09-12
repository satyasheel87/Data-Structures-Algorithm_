console.log("HI")
console.log("kya kar rhe ho aao DSA practice ho jaye")

let prompt = require("prompt-sync")()

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")

if(a>b){
    console.log(`Greater number is: ${a}`)
}else{
    console.log(`Greater number is: ${b}`)
}