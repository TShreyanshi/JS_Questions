function rem(a) {
    const a1 = [...new Set(a)];
    return a1;
  }

  console.log(rem(["shreya","jass","shreya",7,9,5,3,56,6,9,"jassie"]));