function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

console.log(isValidUrl("https://www.shreyanshiparashar.com/"));
console.log(isValidUrl("shreyanshiparashar"));



  //Refered