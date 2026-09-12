let prompt = require("prompt-sync")()

let s = prompt("Enter a string: ")

switch (s) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Volvel")
        break;
    case s:
        console.log("conconent")
        break;
    default:
        console.log("Kuch gadbad")
        break;
}