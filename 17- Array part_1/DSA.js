// Array part 1 
// let prompt = require('prompt-sync')()

// let arr = Number(prompt("Enter a number: "))

// let arr = new Array(n)

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter value: "))
// }
// console.log(arr)

// let arr = [20, 45, 65, 98, 75, 99, 63, 45]
// let max = arr[0]

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)

// let arr = [20, 45, 65, 98, 75, 99, 63, 45]
// let max = [0]
// let s_max = [1]

// for (let i = 2; i < arr.length; i++) {
//     if(arr[i] > max){
//         s_max = max
//         max = arr[i]
//     }else if(arr[i]>s_max && arr[i] != max){
//         s_max= arr[i]
//     }
// }
// console.log(s_max)

// let arr = [20, 45, 65, 98]
// let temp = new Array(arr.length)

// let i = arr.length-1
// for(let j = 0; j<temp.length;j++){
//     temp[j] = arr[i]
//     i--
// }
// console.log(arr)
// console.log(temp)


// let arr = [20, 45, 65, 98, 75, 99, 63, 45]

// let sum = 0
// let mean = 0
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     sum += arr[i]
// }
// mean = sum/arr.length
// console.log(`Sum: ${sum}`)
// console.log(mean)

// let arr = [20, 45, 65, 98, 75, 99, 63, 45]

// let max = arr[0]
// let index = 0;
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//         index = i
//     }
// }
// console.log(max)
// console.log(index)


// let arr = [20, 45, 65, 98, 75, 99, 63, 45]
// let temp = new Array(arr.length)

// let i = arr.length - 1
// console.log(i)

// for (let j = 0; j < temp.length; j++) {
//     temp[j] = arr[i]
//     i--;
// }
// console.log(temp)


// let arr = [20, 45, 65, 98, 75, 99, 63, 45]
// let i = 0; let j = arr.length - 1

// while (i < j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)

// let arr = [1, 0, 1, 1, 0, 1, 0]
// let i = 0
// let j = 0

// while (i < arr.length) {
//     if (arr[i] === 0) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr)


// ==================================

// let arr = [2, 96, 69, 77, 145, 20]
// let temp = new Array(arr.length)

// let i = arr.length - 1

// for (let j = 0; j < temp.length; j++) {
//     temp[j] = arr[i]
//     i--;
// }
// console.log(temp)

// second greatest in Array 

function secondGreatest(arr) {

    let first = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }

    }
    return second;
}
let arr = [2, 96, 69, 77, 145, 20];
console.log(secondGreatest(arr));