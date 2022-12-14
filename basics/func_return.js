const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
//после return HE ставить перенос строки, code will be unreacheable
  return curr * amount; //функция возвращает результат, fnc ends
}

function promotion(result) {

  console.log(result * discount);
  // return function(){};
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
      console.log(i);
      if(i === 3)   return //when func sees return it ends(undefined)
  }
  console.log("done");
}
test();

function doNothing() {};
console.log(doNothing() === undefined);
// func всегда нам что-то возвращает, даже если мы не видим return
// undefined



const userData = {
  name: "rostik",
  age: 20
};
console.log(`hello ${userData.name} im ${userData.age}`);
console.log("hello " + userData.name + " i am " + userData.age);





function sayHello(name) {
  // console.log(name);
  // return "Привет" + name;
  return `Привет ${name}`;
}
sayHello("Sonya");
console.log(sayHello("Sonya"));

const myName = sayHello("Sonya");
console.log(myName);


// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.


function returnNeighboringNumbers(num) {
    let array = [];
    // array[0] = num - 1;
    // array[1] = num;
    // array[2] = num + 1;
    let a = num - 1;
    for(let i = 0; i<3; i++) {
      array[i] = a;
      a++;
    }
    console.log(array);
}
returnNeighboringNumbers(4);