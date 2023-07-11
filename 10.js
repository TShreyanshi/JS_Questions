const a = [1,2,3,4,5,6,7,8,9,0];

n = Number(prompt("Enter a number to check"));

let len = a.length;

for(let i of a){
    if(i===n)
    {
        console.log("present");
        break;
    }
    else if(i==(len-1))
        console.log("not present");
}
