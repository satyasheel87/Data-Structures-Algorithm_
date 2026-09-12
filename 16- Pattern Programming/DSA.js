// strong number
/*
function findStrongNumber(n) {
    let copy = n
    let ans = 0
    while (n > 0) {
        let digit = n % 10 
        let fact = 1;
        for (let i = 1; i <= digit; i++) {
            fact = fact * i
            console.log(fact)
        }
        ans = ans + fact
        n = Math.floor(n / 10)
    }
    console.log(ans)
    if (copy === ans) {
        console.log("Strong number")
    } else {
        console.log("Not Strong")
    }
}
findStrongNumber(145)*/


// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");


// for (let i = n; i >= 0; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }



let prompt = require("prompt-sync")()
let n = Number(prompt("Enter a number: "))


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
        // if (i == j || (i + j == n + 1)) {
        //     process.stdout.write("*");
        // }
        // else {
        //     process.stdout.write(" ");
        // }
    //         process.stdout.write("* ");

    // }
    // console.log()
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n - 1; j++) {
//         if(i==j||(i+j==2*n)){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = "* "
        process.stdout.write(row)
    }
    console.log()
}