

const sortArr = (array) => {
    const arr = array.slice()
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

            }
        }
    }
    return arr
}
const arr = [1, 5, 60, 3, 2, 100, 65]


