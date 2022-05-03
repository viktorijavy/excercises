//imperative solution
let str = "Hello world";
let newStr = ''
for (let i = str.length - 1; i >= 0; i--) {

    newStr += str[i]
}

//functional solution
str.split("").map((l, i) => {
    return str[str.length - 1 - i]
}).join("")

const stringReverse = (str) => {
    return str.split('').reverse().join('')
}

stringReverse("Hello, my name is Vicky")