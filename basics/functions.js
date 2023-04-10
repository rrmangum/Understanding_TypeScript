"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// Best practice
function printResult(num) {
    console.log("Result: " + num);
}
// void here is just saying to ignore the return, it won't error if the callback actually returns something
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
