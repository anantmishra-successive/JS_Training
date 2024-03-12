//Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const toCamel = (string)=>{
    let str1 = string.split(' ');
    let ans=str1[0];
    for(let i=1; i<str1.length; i++){
ans += str1[i][0].toUpperCase()+str1[i].substring(1);

    }
    console.log(ans);
}
toCamel("hello john doe")