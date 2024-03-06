// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")



const reverse=(string)=>{
let str1 = string.split(" " );
let ans=[];

for(i of str1){
 
let str2= i.split("").reverse().join("")
ans.push(str2)

}
console.log(ans.join(" "));
}
reverse("Hello John");