const obj = {
    name: 'Ernesto',
    age: '22',
    country: 'MX',
};

let { name, ...all} = obj;
console.log(name, all);