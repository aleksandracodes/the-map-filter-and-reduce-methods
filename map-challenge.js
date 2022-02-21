/*
You will use destructuring assignment to create two variables 
and you will assign them values from calling the map method on the students array. 
The function provided to the map method can either be created within the map method 
or outside and passed in but in either case, it should use an arrow function. 
The map method should return an array for each item in the students array and this new
array should contain two items the items name value and the items results value.
*/

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

let [john, ...rest] = students.map(student => [student.name, student.results]);

// Or create function first and use in map
// const mapper = (itm) => [itm.name, itm.results];
// let [john, ...rest] = students.map(mapper);

console.log(john)
console.log(rest)



