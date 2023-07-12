const n = Number(prompt("Enter a Number"));
let sum = 1;
for(let i=2;i<n;i++){
    if(n%i==0){
        sum += 1;
    }
}
if(sum===1){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}