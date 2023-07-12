let s1 = prompt("String 1: ");
let s2 = prompt("String 2: ");

const a1 = s1.split("");
const a2 = s2.split("");

console.log(a1,a2);

function anagram(a1,a2){
    let n1 = a1.length;
    let n2 = a2.length;
    
    if(n1!=n2)
        return "not anagram";
    
    a1.sort();
    a2.sort();
    for(let i=0;i<n1;i++){
        if(a1[i]!=a2[i]){
            return "not anagram";
        }
    }
    return "anagram";
}

console.log(anagram(a1,a2));
