// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


const counting=(s)=>{
    let freqObj={};

    for(let i=0;i<s.length;i++)
    {
        if(freqObj[s[i]])
        freqObj[s[i]]+=1;
        else
        freqObj[s[i]]=1;
    }
    console.log(freqObj);
    
    let ans ="";
    for(i in freqObj){
      ans = ans+i+freqObj[i];
    }
    return ans;
}


console.log(counting("abcabcdabbcc"))