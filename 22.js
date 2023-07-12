const n = Number(prompt("Enter a Number"));
let s = 0;
for(let i = 1;i<=n;i++){
    if(i%2==0)
        s+=i;
}
console.log("sum is ",s);