function idISBN(n) {
    // Write your logic here
    let sum =  0
    let num = n.toString().length
    for (let i = 0; i < num; i++) {
        let digit = Number(n[i])
        // console.log(digit,"x", (i + 1),"=", digit*i+1)
        sum = sum + digit * (i + 1)
    }   
    console.log(sum)
    return sum % 11 === 0 ? "Yes" : "No"
}

console.log(idISBN("0471958697"))

