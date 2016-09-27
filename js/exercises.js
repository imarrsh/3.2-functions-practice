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
            console.log(char,'is a match');
            return true; // will break out, no break statement needed
        }
      }

      return false;

  }

  console.assert(isVowel('E') == true);
  console.assert(isVowel('m') == false);

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket".
  // That is, double every consonant and place an occurrence of "o" in between.
  // For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(phrase){
      "use strict";
      //...
  }

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies
  // (respectively) all the numbers in an array of numbers. For example,
  // sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  function sum(){
      "use strict";
      //...
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
