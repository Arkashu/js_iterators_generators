'use strict';
const arr = [1, 2, 3, 4, 5];
const itrArr = {
    gen(arr) {
        let i = -1;
        return {
            next() {
                i++
                if (i < arr.length) {
                    return {value: arr[i], done: false};
                }
                return {value: undefined, done: true}
            }
        }
    }
}


const iterator = itrArr.gen(arr);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

