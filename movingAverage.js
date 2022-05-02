class MovingAverage {
    // track a array of all numbers
    constructor(N) {
        // ...
        this.numbers = []
    }

    add(number) {
        // ...
        this.numbers.push(number)
        const sum = this.numbers.reduce((acc,val) => acc 
        + val, 0);
        console.log(this.numbers);
        return sum/this.numbers.length
    }

}
// const movingAverage = new MovingAverage(3);
//  assert.deepEqual(3.0, movingAverage.add(3));
//  assert.deepEqual(3.5, movingAverage.add(4));
//  assert.deepEqual(4.0, movingAverage.add(5));
//  assert.deepEqual(4.333333333333333, movingAverage.add(4));
const myMove = new MovingAverage(3)
const a = myMove.add(3)
console.log(a);
const b = myMove.add(4)
console.log(b);
const c = myMove.add(5)
console.log(c);
const d = myMove.add(4)
console.log(d);