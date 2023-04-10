function add(n1: number, n2: number) {
  return n1 + n2;
}

// Best practice
function printResult(num: number): void {
  console.log("Result: " + num);
}

// void here is just saying to ignore the return, it won't error if the callback actually returns something
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
