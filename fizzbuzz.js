const fizzBuzz = (n) => {
    const images = ['a', 'b', 'c']
    for (let i = -5; i < n; i++) {

        if (i % 3 === 0) {
            console.log('fizz')
        }
        if (i % 5 === 0) {
            console.log('buzz')
        }
        if (i % 3 === 0 && i % 5 === 0) {

            console.log('fizzbuzz')
        }
    }


}

fizzBuzz(8)


// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5