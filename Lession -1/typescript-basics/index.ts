// Task: 1
let message: string = 'Hello world!';
let myName: string = 'Naeem';
let age: number = 28;
let isLearning: boolean = true;

// console.log(`Name: ${myName}, age ${age}, Learning TypeScript is: ${isLearning}`)


// Task: 2
let numbers: number[] = [1, 2,3,4,5];
let names: string[]= ['Naeem', 'Zobayer', 'Sihab'];

// console.log('Numbers:', numbers);
// console.log('Names: ', names)


//Task: 3
let person: { name: string; age: number; isStudent: boolean, country: string} = {
    name: 'Naeem',
    age: 30,
    isStudent: false,
    country: 'Bangladesh'
}

// console.log(`Person: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`)


//Task: 5 - Function and type annotations 

function add(a: number, b: number): number{
 return a + b;
}


// console.log(add(5, 10))


// Function with default parameter

function greet(name: string = 'Guest'): string{
    return `hello ${name}`
}
// console.log(greet())


// Task: 6 - Alias and Interface

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}

let person1: Person = {name: "Naeem", age: 30, isStudent: false};
let person2: Person = {name: "Nafiya", age: 1, isStudent: false};


// console.log(person1, person2)


// Task 6: Interface

interface car {
    brand: string;
    model: string;
    year: number;
}

let myCar: car = {
    brand: "Toyota", model: "Corolla", year: 2022
}



// console.log(`car: ${myCar.brand} ${myCar.model}, year: ${myCar.year}`)


// Task 7: Union Types

function printId(userId: string | number): void {
    console.log(userId)
}

// printId(true)
