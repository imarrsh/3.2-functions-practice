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
      var vowels = ['a', 'e', 'i', 'o', 'u'];

      var i = 0;
      for (i; i < vowels.length; i++){
        if(char == vowels[i]){
            // console.log(char,'is a match');
            return true; // will break out, no break statement needed
        }
      }

      return false;

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

  function sum(){
      "use strict";
      
  }

  function multiply(){
      "use strict";
      //...
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For
  // example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(){
      "use strict";
      //...
  }

  // ---------------------
  // Write a function findLongestWord() that takes an array of words and returns
  // the length of the longest one.
  // ---------------------

  function findLongestWord(words){
      "use strict";
      //...
  }

  // ---------------------
  // Write a function filterLongWords() that takes an array of words and an
  // integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(words, i){
      "use strict";
      //...
  }

  // ---------------------
  // Write a function charFreq() that takes a string and builds a frequency
  // listing of the characters contained in it. Represent the frequency listing
  // as a Javascript object. Try it with something like
  // charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(string){
      "use strict";
      //...
  }



}());
