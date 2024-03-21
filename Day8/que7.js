// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// when we expect output from 0 to 9 so we have to use block scope so change the variable scope from global to local 

for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000); }