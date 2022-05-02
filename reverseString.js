//imperative solution
let str = "Hello world";
let newStr = ''
for (let i=str.length-1; i>=0; i--) {
 // console.log(str[i])
  newStr += str[i]
}

//functional solution
str.split("").map((l, i) => {
  console.log(str.length - i)

  return str[str.length -1  - i]
}).join("")