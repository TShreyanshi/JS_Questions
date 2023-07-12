let s = prompt("Enter a String");
const a = s.split(" ");

for(let i=0;i<a.length;i++){
    a[i] = a[i][0].toUpperCase() + a[i].slice(1); 
}
 let s1 = a.join(" ");
console.log(s1);