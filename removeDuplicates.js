//Remove all duplicates from an array of integers

const removeDups = (arr) => {


    //     const result = [...new Set(arr)]
    //     return result

    let uniqueArray = arr.filter((num, i) => {
        console.log(i)
        return arr.indexOf(num) == i
    })


    return uniqueArray
}

console.log(removeDups([1, 2, 3, 5, 3, 7, 8, 8, 8, 10, 11, 1]))