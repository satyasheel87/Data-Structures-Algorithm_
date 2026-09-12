// Introduction of Loop 
function sumEvenOddInRange(start, end) {
    // Write your logic here
    let startNum = Number(start)
    let endNum = Number(end)
    if (startNum > endNum) {
        let temp = startNum
        startNum = endNum
        endNum = startNum
    }
    let evenSum = 0
    let oddSum = 0
    for (let i = startNum; i <= endNum; i++) {
        if (i % 2 === 0) {
            evenSum += i
        }else{
            oddSum += i
        }
    }
    return [evenSum, oddSum]
}
console.log(sumEvenOddInRange(2, 10))