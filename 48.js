const set1 = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
let s1 = prompt("String 1: ");
s1 = s1.toLowerCase();
const a1 = s1.split("");
a1.sort();
const set2 = new Set(a1);

function panagram(set1,set2){
    for(let i of set1){
        let c=0;
        for(let j of set2){
            if(i===j){
                c=1;
            }
        }
        if(c==0)
            return "not panagram"
    }
    return "panagram";
}

console.log(panagram(set1,set2));
