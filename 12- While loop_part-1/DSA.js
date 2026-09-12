function sumOfDigits(n) {
    // Write your logic here
    let sum = 0
    while (n > 0) {
        let digit = n % 10
        sum = sum + digit
        n = Math.floor(n / 10)
    }
    return sum
}

console.log(sumOfDigits(5556554656445465646664654))