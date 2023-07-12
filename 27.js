const max = (a) => {
    let m = a[0];
    for (var i = 1; i < a.length; i++) {
    if (a[i] > m) {
      m = a[i]; 
    }
  }
  return m;
}

console.log(max([28643,84278642,9048395,37883,289178428]));