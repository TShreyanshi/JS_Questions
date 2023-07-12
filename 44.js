function decToBin(n){
    console.log("hey");
    let s="";
    while(n>=1){
        let d = n%2;
        console.log(d);
        s = d+s;
        n=Math.floor(n/2);
    }
    return s;
}
console.log(decToBin(9));