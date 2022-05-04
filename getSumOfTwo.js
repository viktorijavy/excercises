// brute force method with nested loops

function twoSum(arr, sum) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum === arr[i] + arr[j]) result.push([arr[i], arr[j]])
        }
    }
    return result
}

console.log(twoSum([1, 2, 4], 5))


//better solution with hashmap
let getSumOfTwo = (array, n) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            results.push([hashMap[array[i]], array[i]])
        } else {
            hashMap[n - array[i]] = array[i];
        }
    }
    return results;
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50));