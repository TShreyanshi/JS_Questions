const max = (a) => {
    let m = Number.MAX_SAFE_INTEGER;
    for (var i = 1; i < a.length; i++) {
    if (a[i] < m) {
      m = a[i]; 
    }
  }
  return m;
}

console.log(max([28643,84278642,9048395,37883,289178428]));