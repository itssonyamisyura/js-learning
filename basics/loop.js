"use strict";

// let num = 50;

// while ( num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//       // break;
//       continue;
//     }
//     console.log(i);
// }

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
      console.log(j);
  }
}

// *
// **
// ***
// ****
// *****
// ******

let result = "";
// const length = 7;

for (let i = 1; i < length; i++) {

  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result);


  let i = 5;
  while ( i <=10 ) {
      console.log(i);
      i++;
  }

  for (let i = 20; i >= 10; i--) {
    console.log (i);
    if (i === 13) {
        break;
    }
}
for (let i = 2; i <= 10; i++) {
  if ( i % 2 ) {}
}

console.log(11 % 3);

for (let i = 2; i <= 10; i++) {
  if ( i % 2 === 0) {
      console.log(i);
  } 
}
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [3, ];
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// // Пишем решение вот тут
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] == "number") {
//     data[i] = data[i]*2;
    
//   } else {
//     data[i] += ' done';
//   }

// }
// console.log(data);
