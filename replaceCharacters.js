//Replace every occurrence of a given character in a string with another. 
//For Example- Replace "l" with "X"
//'hello world' ---> 'heXXo worXd'

const replaceChars = (inputStr, replaceThis, withThis) => {

    let returnValue = []

    for (let i = 0; i < inputStr.length; i++) {

        if (inputStr[i] === replaceThis) {
            returnValue.push(withThis)

        }
        else {
            returnValue.push(inputStr[i])
        }
    }
    return returnValue.join('')
}

console.log(replaceChars('Viktorija', 'k', 'c'))