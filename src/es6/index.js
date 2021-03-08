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