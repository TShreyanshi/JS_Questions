let s = prompt("Enter a String");
const len = s.length;
let ns ="";
const rev = (s)=>{
    for(let i=0;i<len;i++){
        ns = s[i] + ns;
    }
    console.log(ns);
}
rev(s);