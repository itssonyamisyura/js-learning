"use strict";

const str = "teSt";
const arr = [1, 2, 4];

// console.log(arr.length); //elements inside arr

// console.log(str[2] = "d");

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);


let fruit = "Some fruit";

console.log(fruit.indexOf("q")); 


//cut something
const logg = "hello world";

console.log(logg.slice(6));

//-6 doesnt work
console.log(logg.substring(6, 11));

//how many symb we want to cut(2ed)
console.log(logg.substr(6, 5));


//NUMBERS
//Math
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));   //12
console.log(parseFloat(test)); //12.2