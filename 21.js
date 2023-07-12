function generatePassword(len) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
  
    for (var i = 0; i < len; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomIndex);
    }
  
    return password;
  }
  
  var pLength = 8;
  console.log("Generated Password:", generatePassword(pLength));
  