// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

 function printDiamond(size) {
	let pattern = "";
	for (var i = 1; i <= size; i++) {
	  for (let s = size - 1; s >= i; s--) {
		pattern += (" ");
	  }
	  for (let j = 1; j <= i; j++) {
		pattern += ("* ")
	  }
	  pattern += "\n";
	}
	if (i == size + 1) {
	  for (let i = 1; i <= size - 1; i++) {
		for (let s = 1; s <= i; s++) {
		  pattern += (" ");
		}
		for (j = i; j <= size - 1; j++) {
		  pattern += ("* ");
		}
		pattern += "\n";
	  }
	}
	console.log(pattern)
  }
printDiamond(5);