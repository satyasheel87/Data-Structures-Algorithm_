// shorting algorith.

// Bubble short 
// selection short 
// insertion short 

// pattern programming nested looping


let arr = [5, 4, 3, 2, 1];

function selectionSort(arr) {
    // Write your logic here
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}
console.log(selectionSort(arr));


