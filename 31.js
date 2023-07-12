const index = (a,n) => {
    let s = 0, len = a.length;
    for(let i=0;i<len;i++){
        if(a[i]==n){
            return i;
        }
  }
  return -1;
}
const n = Number(prompt("Enter a Number"));
console.log(index([28643,84278642,9048395,37883,289178428],n));