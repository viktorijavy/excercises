const checkIfAnagram = (first, second) => {


    firstWord = first.toLowerCase().split("").sort().join('')
    secondWord = second.toLowerCase().split("").sort().join("")


    return firstWord === secondWord
}

checkIfAnagram('Mary', 'Army')