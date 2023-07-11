const a = [];
a.push(prompt("Enter a no."));
a.push(prompt("Enter a no."));
a.push(prompt("Enter a no."));
console.log(a);

// OR

const b = [];

let res = () =>{
    return prompt("Enter a no.");
}

b.push(res());
b.push(res());
b.push(res());

console.log(b);


//Object create wala try krna




