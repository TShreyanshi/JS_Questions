let number=prompt("Enter a Number to check even or odd");
console.log(number);
let res = number%2==0?"even":"odd";
console.log(res);

//extra

number = Number(number) + 1;
console.log(number);

let res1 = (number) =>{
    if(number%2==0)
    return "even";
    return "odd";
}

console.log(res1());