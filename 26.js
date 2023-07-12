a = [4, 5, 6, 7 ,8, 1000]

const fact = (n) => {
    var f= 1n;
    for(let i=1n;i<=n;i++){
        f = f*i;
    }
    return f;
}

for(let i of a){
    console.log(fact(i));
}

// how to take thousand factorial----->>>> BigInt