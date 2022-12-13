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
