const substitutionModule = (function () {

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = []; // create array variable
  function substitution(input, alphabet, encode = true) {

    const checkForRepeats = new Set(alphabet);  //returns false if there are any duplicate characters in the given alphabet
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) return false;
        
    alphabet.split("");
    if (encode)
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[standardAlphabet[i]] = alphabet[i];
        
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter]
    })
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };