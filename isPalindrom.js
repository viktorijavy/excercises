const isPalindrom = (word) => {

    const lowerCased = word.toLowerCase()

    const wordReversed = lowerCased.split('').reverse().join('')
    return lowerCased === wordReversed ? 'palindrom' : 'not palindrom'

}

console.log(isPalindrom('Hannah'))
