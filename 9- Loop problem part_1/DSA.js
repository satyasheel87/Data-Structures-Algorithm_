console.log("This is loop lecture")
let prompt = require("prompt-sync")()

let n = prompt("Enter a number: ")
// let factors;
// let arr = []
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        process.stdout.write(i + " ")
    }
}