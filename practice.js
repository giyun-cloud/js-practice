// age = 17
// console.log(age)

// var age = 17



//for ..of

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//for ..in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}