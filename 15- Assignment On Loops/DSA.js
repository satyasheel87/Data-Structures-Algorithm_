
// class soution {

//     primeFactors(n) {
//         if (n === 0 || n === 1) {
//             return "No prime factors"
//         }
//         let ans = ""
//         for (let i = 2; i <= n; i++) {
//             while (n % i === 0) {
//                 ans = ans + i + " "
//                 n = n / i
//             }
//         }
//         return ans.trim()
//     }
// }

// let sol = new soution()
// sol = sol.primeFactors(658956)
// console.log(sol)

// function checkArmstrong(n) {
//     // write your code here
//     let num= Math.abs(n)
//     let digit = String(num).length;
//     console.log(digit)
//     let digits = String(num).split('').map((value) => {
//         return Math.pow(value, digit)
//     });
//     let total = digits.reduce((acc, curr) => {
//         return acc + curr
//     }, 0);
//     console.log(total)
//     if (total === n) {
//         console.log("Armstrong")
//     } else {
//         console.log("Not Armstrong")
//     }
// }
// checkArmstrong(153)



function checkNeon(n) {
    // write your code here
    let square = n * n
    console.log(square)
    let final = String(square).split('').map(Number).reduce((acc, curr) =>{
        return acc +  curr
    }, 0)
    console.log(final)
    if(final === n){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
checkNeon(9)