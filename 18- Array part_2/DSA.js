// let arr = [1, 2, 3, 4, 5]

// let left = 0
// let right = arr.length - 1    // 4 se 0 tak loop chalega

// while(left < right){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left ++
//     right--
// }
// console.log(arr)


// let arr = [1, 2, 3, 4, 5]

// let first = arr[0]
// // console.log(first)

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i])
//     arr[i] = arr[i + 1]
// }

// arr[arr.length - 1] = first
// console.log(arr)


// let arr = [1, 0, 1, 1, 0, 1, 0, 1]

// let i = 0
// let j = 0

// while(i < arr.length){
//     if(arr[i] == 1){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr)



let arr = [0, 1, 0, 1, 1]
let j = 0;
// Step 1: Saare non-zero elements ko aage shift karein
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[j] = arr[i];
        j++;
    }
}
console.log(arr)
// Step 2: Bache huye saare slots ko zero (0) bana dein
while (j < arr.length) {
    arr[j] = 0;
    j++;
}
console.log(arr)