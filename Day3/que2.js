// Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10


let m=4;
let n=1;
for(let i=1;i<=m;i++) {
    let m = "";
    for(let j=1;j<=i;j++){
        m+= n+" ";
        n++;
    }

console.log(m);
}


console.log();

// 1
// 2 2
// 3 3 3
// 4 4 4 4

let x =4;

let y =1;
for(let i=1;i<=x;i++) {
        let x = "";
        for(let j=1;j<=i;j++){
            x+= y+" ";
            
        }
        y++;
    
    console.log(x);
    }


    console.log();


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



let a =5;
for(let i=a;i>=1;i--){
    let a ="";
    for(let j=1;j<=i;j++)
    {
        a+=j+" ";
    }
    console.log(a);
}

for(let i=2;i<=a;i++) {
    let a ="";
    for(let j=1;j<=i;j++){
        a+=j+" ";
    }
    console.log(a);
}


console.log();
