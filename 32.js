const n = Number(prompt("Enter a Number"));
const hr = Math.floor(n/(60*60));
const min = Math.floor(n%(60*60)/60);
const sec = (n%(60*60))%(60);
console.log(hr,':',min,":",sec);