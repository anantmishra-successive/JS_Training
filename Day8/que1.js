// Find Error in below questions and rectify them

//  let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

// Rectify Code :
// when indexing sarts from 0 we have to iterate array untill the last element which is array.length-1 or in for loop we have to use only less than sign
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}
