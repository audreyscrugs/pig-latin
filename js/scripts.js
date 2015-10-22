var isVowel = function(string) {
  if(string.charAt(0) === "a" || string.charAt(0) === "e" || string.charAt(0) === "i" || string.charAt(0) === "o" || string.charAt(0) === "u") {
    return string + "ay";
  } else {
    return string
  }
}
