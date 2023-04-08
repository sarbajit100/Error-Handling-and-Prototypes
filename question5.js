class person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    details(){
       console.log(`name is ${this.name} he is ${this.age} years old`);
    }
  }
  const person1 = new person("mithun",20)
  person1.details();
