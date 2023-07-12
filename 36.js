// 0 1 1 2 3 5 8 13 21 .....
// refered : learned that it has another pattern too
// (5*(n*n)-4) || (5*(n*n)+4) is a perfect square then it is a fibonacci no.

const isFibonacci = (n) => {
    const s1 = Math.sqrt(5*n*n - 4);
    const s2 = Math.sqrt(5*n*n + 4);
    if((s1===Math.floor(s1)) || (s2===Math.floor(s2))){
        return "Fibonacci Number";
    }
    return "Not a Fibonacci Number";
}
const n = Number(prompt("Enter a Number"));
console.log(isFibonacci(n));