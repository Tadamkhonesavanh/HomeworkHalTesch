// Abstract Class
abstract class Animal {
    //khun som but pen string
    protected name: string;
    //constructor
    constructor(name: string) {
        this.name = name;
    }

    //  Method nam ma tham kam nod vai sueb thrt khrng class animal
    abstract makeSound(): void;
    //abstract br me karn kam nod detail in animal tae ja pai kam nod nai class louk

    // Encapsulation karn khao thurng khr moun (name jark nrk Class)
    public getName(): string {
        return this.name;
    }
    //Encapsulation tung khar khr moun
    public setName(name: string): void {
        this.name = name;
    }
}
//Inheritance jark animal class
// Dog Class
class Dog extends Animal {
    private breed: string; // khun som but khrng Encapsulation pen private

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    public makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }

    public getBreed(): string {
        return this.breed;
    }

    public setBreed(breed: string): void {
        this.breed = breed;
    }
}
//Inheritance jark animal class
// Cat Class
class Cat extends Animal {
    private color: string;// khun som but khrng Encapsulation pen private

    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    } // kam nod hai pen tua pae name

    public makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
    
    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
}
// Object
let myDog = new Dog("Max", "Labrador");
let myCat = new Cat("Luna", "Black");


// console.log(dog.name); //this tag ja pen karn khao thurng class doi tong 
//br sa mart sai dai

console.log(myDog.getName()); // output Max
console.log(myDog.getBreed()); // output Labrador
myDog.makeSound(); // output Max says: Woof!

console.log(myCat.getName()); // output Luna
console.log(myCat.getColor()); // output Black
myCat.makeSound(); // output Luna says: Meow!

export { Animal, Dog, Cat };
