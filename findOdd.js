const findOdd = (arr) => {
    let obj = {};
    arr.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}

console.log(findOdd([1, 1, 1, 2, 2]))