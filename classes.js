class Employees{
    constructor(name,id,age){
        this.name = name;
        this.id = id;
        this.age = age
    }

    printDetails() {
        console.log(`Employee Details: \nName: ${this.name}\nUSN: ${this.id}\nAge: ${this.age}`)
    }
}

class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }

const rect = new Rectangle(10,20)
console.log("Height "+rect.height) // Undefined

const Interns = class extends Employees{
    #printDetails() {
        console.log(`Intern Details: \nName: ${this.name}\nUSN: ${this.id}\nAge: ${this.age}`)
    }
}

const s = new Interns("Sandesh H D", "4XY43XX1", 20)
s.printDetails()

// Computed Properties

let propName = 'roar'

let animal = {
    name:"Lion",
    [propName]:true
}
console.log(animal)