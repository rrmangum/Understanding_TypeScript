// const add = (a: number, b: number) => {
//   return a + b;
// };

// const add = (a: number, b: number) => a + b;
// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(5, 2));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
  firstName: "Ryan",
  age: 30,
};

const copiedPerson = { ...person };

// Accept any number of arguments - Rest Parameter
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array destructuring - elements pulled out in order
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// Object destructuring - elements pulled out by key names
const { firstName: userName, age } = person;
console.log(userName, age);
