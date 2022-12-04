"use strict";

// alert("Hello");

// const result = confirm("are you an idiot?");
// console.log(result);

// const answer = +prompt("are you ok?","no");
// console.log(typeof(answer)); 

// const a = 10;
// const b = "8";
// const c = +b;

// console.log(a + c);

const answers = [];

// answers[0] = prompt("whats your name?","");
// answers[1] = prompt("whats your surname?","");
// answers[2] = prompt("how old are you?","");

console.log(typeof(answers));

const category = "toys";

console.log(`http://someurl.com/${category}/5`);

const user = "Sonchik";

alert(`hiii, ${user}`);


let incr = 10,
    decr = 10;

// ++incr;
// decr--;

console.log(incr++);
console.log(--decr);


console.log(5%2);

console.log(2*4 == 8);
console.log(2*4 === "8");

// && and   both
// || or   just one is true
// !    otricanie

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);

console.log(isChecked || !isClose);