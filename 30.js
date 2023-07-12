const n = Number(prompt("Enter a Number"));
const n1 = Math.sqrt(n);
const n2 = Math.floor(Math.sqrt(n));
console.log(n1,"\t",n2);
if(n1===n2){
    console.log("perfect square");
}
else{
    console.log("not perfect square")
}