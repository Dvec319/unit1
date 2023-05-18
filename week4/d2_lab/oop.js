// Class and Object oriented programming
// Looking at your application as objects interacting with each other
// Adjectives that describe your object (properties)
// Verbs or things the object can do (methods)

// Define a class (blueprint)
class Dog {
    // constuctor function: runs once when you use the NEW keyword
    // define parameters for properties you want to be changeable
    constructor(name){
        // assign initial values of properties to the object in the constructor
        this.age = 0
        // assign the value of the property from the function parameters
        this.name = name
    }

    // method, a function the instantiated can use
    bark(){
        console.log(`${this.name} is now barking`)
    }

    // method that mutates the object
    birthday(){
        this.age += 1
        console.log(`${this.name} is now ${this.age} years old`)
    }
}


// Instantiate an object from a class (build the thing from the blueprint)
const dog = new Dog("Sparky")
const dog2 = new Dog("Fido")

console.log(dog)
console.log(dog2)

// using object methods
dog.bark()
dog2.bark()

dog.birthday()
dog.birthday()
dog.birthday()
console.log(dog)