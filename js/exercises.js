(function(){
  "use strict";

  /**
   *
   */

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns
  // the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2){
      "use strict";

      var largest;


      if (num1 > num2){
        largest = num1;
      } else {
        largest = num2;
      }

      // console.log(largest);
      return largest;
  }

  console.assert(max(5, 10) == 10);
  console.assert(max(100, 57) == 100);

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and
  // returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3){
      "use strict";

      var largest;

      if(num1 > num2){

        largest = num1;

        if(largest < num3){
          largest = num3;
        }

      } else {

        largest = num2;

        if (largest < num3) {
          largest = num3;
        }
      }

      return largest;
  }

  console.assert(maxOfThree(33, 45, 99) == 99);
  console.assert(maxOfThree(3, 7, 1) == 7);

  // ---------------------
  // Write a function that takes a character (i.e. a string of length 1) and
  // returns true if it is a vowel, false otherwise.
  // ---------------------

  function isVowel(char){
      "use strict";
      var char = char.toLowerCase(); // handle loud letters
      // var vowels = ['a', 'e', 'i', 'o', 'u'];
      //
      // var i = 0;
      // for (i; i < vowels.length; i++){
      //   if(char == vowels[i]){
      //       // console.log(char,'is a match');
      //       return true; // will break out, no break statement needed
      //   }
      // }
      //
      // return false;
      return 'aeiou'.indexOf(char) !== -1; // so elegant one line... 

  }

  console.assert(isVowel('E') == true);
  console.assert(isVowel('m') == false);

  // ---------------------
  // Write a function rovarspraket() that will translate a text into
  // "rövarspråket". That is, double every consonant and place an occurrence
  // of "o" in between. For example, translate("this is fun") should return
  // the string  "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(phrase){
      "use strict";
      // var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
      //                   'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

      var phraseArray = phrase.split('');
      var phraseArrayLen = phraseArray.length;
      // console.log(phraseArray);

      //
      var spraket = [];

      // loop through phrase
      for(var i = 0; i < phraseArrayLen ; i++){
        // assign currentChar to value current char index
        var currentChar = phraseArray[i];
        // use isVowel() to determine if currentChar is a vowel or not
        if(isVowel(currentChar)){
          spraket.push(currentChar);
        } else if (currentChar == ' '){
          // leave spaces alone and push them up
          spraket.push(currentChar);
        } else {
          // double up on currentChar and put 'o' inbetween
          var encodedChar = currentChar + 'o' + currentChar;
          spraket.push(encodedChar);
        }

        // loop through consonants to find a match
        // this didnt work out so well...
        // for(var j = 0; j < consonants.length; j++){
        //   // assign current consonant to current consonant index
        //   var currentConsonant = consonants[j];
        //   // if currentChar finds a match
        //   if(currentChar == currentConsonant){
        //      var encodedChar = currentChar + 'o' + currentChar;
        //      spraket.push(encodedChar);
        //   } else {
        //     spraket.push(currentChar);
        //   }
        //
        // }

      }

      var newPhrase = spraket.join('');

      return newPhrase;

  }

  console.assert(rovarspraket('fun fun function') == 'fofunon fofunon fofunoncoctotionon')
  console.assert(rovarspraket('taco bell is awesome') == 'totacoco bobelollol isos awowesosomome');

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies
  // (respectively) all the numbers in an array of numbers. For example,
  // sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  function sum(numArray){
    "use strict";
    // console.log(numbers.length) // 4
    var result = 0; // start at 0 for addition

    for(var i = 0; i < numArray.length; i++){
      var currentNum = numArray[i];
      result += currentNum;
    }

    return result;
  }

  console.assert(sum([1,2,3,4]) == 10);
  console.assert(sum([2,4,6,8]) == 20);

  function multiply(numArray){
    "use strict";
    var result = 1; // start at 1 for multiplication

    for(var i = 0; i < numArray.length; i++){
      var currentNum = numArray[i];
      result *= currentNum;
    }

    return result;
  }

  console.assert(multiply([1,2,3,4]) == 24);
  console.assert(multiply([2,4,6,8]) == 384);

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For
  // example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(str){
    "use strict";

    var strArray = str.split('');
    var reversedArray = strArray.reverse();
    var reverseStr = reversedArray.join('');

    return reverseStr;

  }

  console.assert(reverse('jag testar') == 'ratset gaj');
  console.assert(reverse('beer run') == 'nur reeb');

  // ---------------------
  // Write a function findLongestWord() that takes an array of words and returns
  // the length of the longest one.
  // ---------------------

  function findLongestWord(words){
    "use strict";
    var longestLength = 0;

    for(var i = 0; i < words.length; i++){
      var currentWord = words[i];
      var currentWordLen = currentWord.length
      // console.log(currentWord, currentWord.length);
      if (currentWordLen > longestLength){
        longestLength = currentWordLen;
        // console.log(longestLength);
      }
    }

    return longestLength;
  }

  console.assert(findLongestWord(['John', 'hammer', 'toothbrush', 'pen']) == 10);
  console.assert(findLongestWord(['sandwich', 'screwdriver', 'toilet', 'beer']) == 11);

  // ---------------------
  // Write a function filterLongWords() that takes an array of words and an
  // integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(words, i){
    "use strict";
    var longWords = [];

    for(var j = 0; j < words.length; j++){
      var word = words[j];

      if(word.length > i) {
        longWords.push(word);
      }
    }
    // console.log(longWords);

    return longWords;
  }
  console.assert(filterLongWords(['John', 'hammer', 'toothbrush', 'pen'], 5).length == 2);

  console.assert(isEquivalent(filterLongWords(['John', 'hammer', 'toothbrush', 'pen'], 5), ['hammer', 'toothbrush']));
  console.assert(isEquivalent(filterLongWords(['sandwich', 'screwdriver', 'toilet', 'beer'], 7), ['sandwich', 'screwdriver']));

  // ---------------------
  // Write a function charFreq() that takes a string and builds a frequency
  // listing of the characters contained in it. Represent the frequency listing
  // as a Javascript object. Try it with something like
  // charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(string){
    "use strict";
    var strToLower = string.toLowerCase();
    // console.log(strLower);

    var charsTotal = {};

    for(var i = 0; i < strToLower.length; i++){
      var char = strToLower[i];
      // console.log(char);
      // add to charsTotal object
      // if(charsTotal[char]) { // <-- in class demo solution
      if(charsTotal.hasOwnProperty(char)){
        charsTotal[char] += 1;
      } else {
        charsTotal[char] = 1;
      }

    }

    // console.log(charsTotal);
    return charsTotal;

  }

  var frequency = charFreq('abbabcbdbabdbdbabababcbcbab');

  // console.assert(frequency === {'a': 7, 'b': 14, 'c': 3, 'd': 3});
  console.log(frequency);


  console.assert(isEquivalent(charFreq('abbabcbdbabdbdbabababcbcbab'), {'a': 7, 'b': 14, 'c': 3, 'd': 3}));
  console.assert(isEquivalent(charFreq('I like lifting living things'), {" ": 4, 'e': 1, 'f': 1, 'g': 3, 'h': 1, 'i': 7, 'k': 1, 'l': 3, 'n': 3, 's': 1 ,'t': 2, 'v': 1}));

  // needed a way to check object equality since console.assert() doesnt seem
  // to sort out if the object or array returned is equal - pulled from:
  // http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
  function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

}());
