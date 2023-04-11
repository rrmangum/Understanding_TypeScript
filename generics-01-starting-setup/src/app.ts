// // generics flexibility with type safety

// // same thing as string[]
// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

// generic function
// can use the extends keyword to place constraints on the types allowed in the generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  // combine two objects
  return { ...objA, ...objB };
}

// fill in concrete types for different function calls of the generic function
// kind of redundant in this case as TypeScript can infer the types so we don't need
// to expressly tell typescript the types with the angle brackets after the functon name
const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Max", hobbies: ["Sports"] },
  { age: 30 }
);

// can't access name or age of mergedObj
// mergedObj.name
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got" + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

// keyof keyword is to tell TypeScript that a generic type will be a property of a generic object type
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage);

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });

// objStorage.removeItem({ name: "Manu" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// partial type
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//readonly type does not allow modification of arrays or objects
const names: Readonly<string[]> = ["Max", "Anna"];
names.push("Manu");
names.pop("Anna");
