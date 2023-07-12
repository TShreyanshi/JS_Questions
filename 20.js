let s = "xy z@email.com"
var pattern = /^[^\s@]+@[a-zA-Z]+\.[A-Za-z]+$/;
console.log(pattern.test(s));
if(pattern.test(s))
    console.log("Valid");
else
    console.log("Invalid");

