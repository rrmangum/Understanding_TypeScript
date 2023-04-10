// abstract classes cannot be instantiated. Instead are used solely for other classes to inherit from.
// if a method is marked abstract, it cannot provide implementation logic, like an interface.
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  // protected keyword for inheriting properties
  protected employees: string[] = [];

  // readonly keyword does not allow you to change the properties
  // shorthand initlization for properties
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // static keyword
  static createEmployee(name: string) {
    return { name: name };
  }

  // specify it's type and the return type.
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// extends keyword allows inheritance
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // super keyword is used to override parent class methods
    super(id, "IT");
  }

  describe() {
    console.log("IT Department: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // Getters must return something
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // Setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  // private constructors don't allow you to create instances of the class
  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // only allows one creation
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Ryan"]);
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

it.addEmployee("Max");
it.addEmployee("John");

// Making the employees property private makes this method of adding employees not work
// it.employees[2] = "Anna";

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

// Create the instance of the class (singleton)
const accounting = AccountingDepartment.getInstance();
// If you do it again, it is the same instance (singleton)
const accounting2 = AccountingDepartment.getInstance();

accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();

// accounting.printReports();
// itCopy.describe();
