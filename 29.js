const avg = (a) => {
    let s = 0, len = a.length;
    for(let i of a) {
        s += i;
  }
  return (s/len);
}
console.log(avg([28643,84278642,9048395,37883,289178428]));