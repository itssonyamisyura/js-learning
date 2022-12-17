"use strict";

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  },
  makeTest: function() {
    console.log("test");
  }
};

options.makeTest(); // = test

// деструктуризация:
const {border, background} = options.colors; 
console.log(border);

// console.log(Object.keys(options).length); // = 4 elements


// console.log(options["colors"]["border"]);

//console.log(options.name);

// delete options.name;


// let counter = 0;

// FOR - IN   

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`svojstvo ${i} imeet znachenije ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`svojstvo ${key} imeet znachenije ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);
