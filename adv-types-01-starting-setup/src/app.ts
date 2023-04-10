type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Ryan",
  privileges: ["create-server"],
  startDate: new Date(),
};

// union type
type Combinable = string | number;
type Numeric = number | boolean;

// intersection type
type Universal = Combinable & Numeric;

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
// type guards
// typeof for JavaScript types
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Ryan", "Nathalie");
result.split(" ");

// optional chaining operator safely accessses nested objects for checking whether or not the object in the chain is undefined, and if it is, then doesn't throw a runtime error
const fetchedUserData = {
  id: "u1",
  name: "Ryan",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

// nullish coalescing operator if userInput is null or undefined then use fallback value
const userInput = null;
const storedData = userInput ?? "DEFAULT";

type UnknownEmployee = Employee | Admin;

// in keyword for custom TypeScript types
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInformation(e1);

// class type guards
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// instanceof operator
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// discriminated unions good to use with interfaces, because you can't use instanceof
interface Bird {
  // literal type
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  // literal type
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  // type safety through a switch statement
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 15 });

// type casting
// exclamation mark is telling TypeScript the expression in front will never yield null.
// we as the developer know that element is not null use the exclamation mark syntax otherwise do a type check
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// type casting in React with as keyword this is to avoid using the JSX syntax
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

userInputElement.value = "Hi there!";

// index type
interface ErrorContainer {
  // I don't know the property name or the count, I just know that every property that's added the property name is a string and the property value is a string
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};

// function overloads
