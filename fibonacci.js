// write a function that returns the nth entry in the Fibonacci sequence, 
// where n is a number you pass in as argument to the function.

const fibonacci = (n) => {

    if (n < 2) return 1

    const result = [1]

    for (let i = 2; i <= n; i++) {

        const prevNum1 = result[i - 1]

        const prevNum2 = result[i - 2]

        result.push(prevNum1 + prevNum2)

    }

    return result[n]
}

console.log('answer', fibonacci(1))


//with recursion

// const fib = (num) => {
//     return num <= 2 ? 1 : fib(num - 1) + fib(num - 2)
// }

// console.log(fib(10))