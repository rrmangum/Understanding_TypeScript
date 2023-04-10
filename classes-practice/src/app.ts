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
  constructor(public breed: string) {
    super("Hilo", 3, "White and Black");
  }
}

class Cat extends Mammal {
  constructor(public isIndoor: boolean) {
    super("Sven", 1, "Gray");
  }
}
