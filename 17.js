const palindrome = (s) =>{
    const len = s.length;
    for(let i=0;i<len/2;i++)
    {
        if(s[i]==s[len-1-i])
        {
            continue;
        }
        else{
            return "not palindrome";
        }
    }
    return "palindrome";
}

console.log(palindrome("abcdcba"));