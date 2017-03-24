class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age}.`;
  }
}

console.log(new Person('Bob', 42).greet());
