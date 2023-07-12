function vowel(s){
    s = s.toLowerCase();
    let c=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='a' | s[i]==='e' | s[i]==='i'| s[i]==='o' | s[i]==='u' )
            c++;
    }
    return c;
}
console.log(vowel("a ee iii oooo uuuuu"));
