const squareS = (a) => {
    let s = 0n, len = a.length;
    for(let i=0;i<len;i++){
        s += a[i]*a[i];
  }
  return s;
}
console.log(squareS([28643n,84278642n,9048395n,37883n,289178428n]));