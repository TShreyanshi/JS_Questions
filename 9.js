const a = [5,6,7,8,9,10];
console.log(a);
a.push(11);
console.log(a);
let sum =0;
for(let i of a){
    sum += i;
}
console.log(`sum is ${sum}`);