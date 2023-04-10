class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string
  ) {}

  introduce() {
    return `Hi, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old. You can reach me at ${this.email}`;
  }
}

const ryan = new Person("Ryan", "Mangum", 30, "rm@gmail.com");
const nathalie = new Person("Nathalie", "Lozano", 29, "nl@gmail.com");

console.log(ryan.introduce());
console.log(nathalie.introduce());

class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    public employeeId: string
  ) {
    super(firstName, lastName, age, email);
  }

  describeJob() {
    return `I am an employee with ID ${this.employeeId}`;
  }
}

const firstEmployee = new Employee(
  "Janice",
  "Jones",
  36,
  "jj@gmail.com",
  "JJ123"
);

console.log(firstEmployee.introduce());
console.log(firstEmployee.describeJob());

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
}

function sendEmail(customer: Customer, message: string) {
  console.log(message + " " + customer.email);
}

class Customer implements Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string
  ) {}
}

const firstCustomer = new Customer("Adam", "Johnson", "aj@gmail.com");

console.log(sendEmail(firstCustomer, "Welcome to my business!"));
