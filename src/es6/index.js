function newFunction(name, age, country){
    var name = name || 'Ernesto';
    var age = age || 22;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Ernesto', age = 22, country = "MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Frase genericamente epica \n"
+ "Otra frase innecesariamente larga.";

//es6
let lorem2 = `otra frase epica necesaria
ahora es otra frase uwuwuw
`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Ernesto',
    'age': '22',
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let tema2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...tema2];

console.log(education);

{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let name = 'Ernesto';
let age = '22';
//es5
Obj = { name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);

const names = [
    {name: 'Ernesto', age: 22},
    {name: 'Yessica', age: 27}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.ValueB = 0;
    }
    sum(valueA, ValueB){
        this.valueA = valueA;
        this.ValueB = ValueB;
        return this.valueA + this.ValueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module'

hello();

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);