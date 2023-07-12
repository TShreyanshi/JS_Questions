const n = Number(prompt("Enter a Numer"));

let perfect = (n) => {
    let i = 1, s = 0;
    while(i<n){
        if(n%i==0){
            s += i;
        }
        i++;
    }
    if(s===n)
        return "Perfect Number";
    return "Not a Perfect No.";
}

console.log(perfect(n));