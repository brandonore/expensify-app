// Object destructuring

// const person = {
//     name: 'Brandon',
//     age: 29,
//     location: {
//         city: 'Parker',
//         temp: 67
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = ['17636 Hoyt Pl', 'Parker', 'CO', '80134'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, small, medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}`);