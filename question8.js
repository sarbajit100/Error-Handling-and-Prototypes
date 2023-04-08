class student {
    constructor(name, password) {
    this.name = name;
    }
    printdetails(){
        console.log(`Hello, the student is ${this.name}`);
    }
}
const s = new student("Mithun");
s.printdetails();