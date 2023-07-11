const a = [1,2,3,4,5,6,7,8,9,0];

n = Number(prompt("Enter a number to check"));

for(let i of a){
    if(i===n)
        console.log("present");
}