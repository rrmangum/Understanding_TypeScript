interface Animal {
  name: string;
  age: number;
}

class Mammal implements Animal {
  constructor(
    public name: string,
    public age: number,
    public furColor: string
  ) {}
}

class Dog extends Mammal {
  constructor(
    public breed: string,
    name: string,
    age: number,
    furColor: string
  ) {
    super(name, age, furColor);
  }
}

class Cat extends Mammal {
  constructor(
    public isIndoor: boolean,
    name: string,
    age: number,
    furColor: string
  ) {
    super(name, age, furColor);
  }
}

class Zoo<T extends Mammal> {
  constructor(public animals: T[]) {}

  addAnimal(animal: T) {
    this.animals.push(animal);
  }
}

const zooDog = new Zoo<Dog>([]);
const zooCat = new Zoo<Cat>([]);

const hilo = new Dog("Dalmatian", "Hilo", 3, "White and Black");
const dakota = new Dog("Mix", "Dakota", 2, "Gray");

const sven = new Cat(true, "Sven", 2, "Gray");
const mrbigglesworth = new Cat(false, "Mr. Bigglesworth", 4, "White");

zooDog.addAnimal(hilo);
zooDog.addAnimal(dakota);

zooCat.addAnimal(sven);
zooCat.addAnimal(mrbigglesworth);

function printAnimals<T extends Mammal>(zoo: Zoo<T>) {
  zoo.animals.forEach((animal) => {
    console.log(animal.name);
    console.log(animal.age);
    console.log(animal.furColor);
    console.log(animal.name);
    if ("breed" in animal) {
      console.log(animal.breed);
    } else if ("isIndoor" in animal) {
      console.log(animal.isIndoor);
    }
  });
}

printAnimals(zooDog);
printAnimals(zooCat);
