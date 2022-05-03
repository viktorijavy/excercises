const isAnagram = (str1, str2) => {


    if (str1.length !== str2.length) {
        return false
    }

    const sortedStr1 = str1.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
    const sortedStr2 = str2.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')


    return sortedStr1 === sortedStr2
}

console.log(isAnagram('New York Times', 'monkey  writes'))