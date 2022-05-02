
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

var newArr = arrayList.splice(0, arrayList.length)
let a = "{{{{{{[[[[]]]}}}}" //invalid
let b = "{{[{[{[]}]}]}}" //valid
let c = "{]}]" //invalid
let d = "[]"
//stack and queue

const bracketCheck = (bracketStr) => {
    let stack = []
    bracketStr.split('').map(item => {
        if (item === "{" || item === "[") {
            stack.push(item)
        }
        //if encounter closing bracket, except last stack item to be the matching closing bracket
        //splice last out

        if (item === "]" && stack[stack.length - 1] === "[") {
            stack.splice(stack.length - 1, 1)
        }
        if (item === "}" && stack[stack.length - 1] === "{") {
            stack.splice(stack.length - 1, 1)
        }

    })
    return stack.length === 0
}

console.log(bracketCheck(a))
console.log(bracketCheck(b))
console.log(bracketCheck(c))
console.log(bracketCheck(d))