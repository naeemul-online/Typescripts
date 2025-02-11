// Task: 1
var message = 'Hello world!';
var myName = 'Naeem';
var age = 28;
var isLearning = true;
// console.log(`Name: ${myName}, age ${age}, Learning TypeScript is: ${isLearning}`)
// Task: 2
var numbers = [1, 2, 3, 4, 5];
var names = ['Naeem', 'Zobayer', 'Sihab'];
// console.log('Numbers:', numbers);
// console.log('Names: ', names)
//Task: 3
var person = {
    name: 'Naeem',
    age: 30,
    isStudent: false,
    country: 'Bangladesh'
};
// console.log(`Person: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`)
//Task: 5 - Function and type annotations 
function add(a, b) {
    return a + b;
}
// console.log(add(5, 10))
// Function with default parameter
function greet(name) {
    if (name === void 0) { name = 'Guest'; }
    return "hello ".concat(name);
}
var person1 = { name: "Naeem", age: 30, isStudent: false };
var person2 = { name: "Nafiya", age: 1, isStudent: false };
var myCar = {
    brand: "Toyota", model: "Corolla", year: 2022
};
// console.log(`car: ${myCar.brand} ${myCar.model}, year: ${myCar.year}`)
// Task 7: Union Types
function printId(userId) {
    console.log(userId);
}
printId(true);
