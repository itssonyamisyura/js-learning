// const hamburger = 5;
// const fries = null;

// if  (hamburger && fries) {
//     console.log("im good");
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "sonya");

// if  (hamburger === 3 && cola && fries) {
//     console.log("super");
// } else {
//     console.log("not good");
// }



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if  (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("super");
// } else {
//     console.log("not good");
// } 
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
// //last one - nuggets



let johnReport, alexReport, samaReport, mariaReport = "done";

console.log(johnReport || alexReport || samaReport || mariaReport);


console.log(!0);

console.log( 1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log( 25 || null && !3);

console.log( NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5 );

console.log( 5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}



