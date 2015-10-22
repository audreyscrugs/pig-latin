var isVowel = function(string) {
  if(string.charAt(0) === "a" || string.charAt(0) === "e" || string.charAt(0) === "i" || string.charAt(0) === "o" || string.charAt(0) === "u") {
    return string + "ay";
  } else {
    //var vowel = ["a","e","i","o","u"]
    var consonant = string.slice(0,1)
    var string = string.slice(1)
    return string + consonant + "ay"
  }
}
//Try looping through an array to pig latinize words that start with various numbers of consonants
