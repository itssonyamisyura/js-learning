"use strict";

let num = 20; // global

function showFirstMessage(text) {
  console.log(text);
  let num = 10; // local
  console.log(num);
}

showFirstMessage("hello world!");
console.log(num);
// замыкание функции это сама функция вместе со всеми внешними переменными, которые ей доступны

function calc(a, b) {
  return(a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// function declaration работает еще до того, как была вызвана
function ret() {
  let num = 50;

  //

  return num;
}
 
const anotherNum = ret();
console.log(anotherNum);


// function expression
const logger = function() {
  console.log("hello");
};

logger();

// strelochanja fce 

// const calc1 = (a, b) => a + b;

const calc1 = (a, b) => {
  console.log("1");
  return a + b;
};

// значение подставляется во время вывода
const usdCurr = 28;
const eurCurr = 30;

function convert (amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);