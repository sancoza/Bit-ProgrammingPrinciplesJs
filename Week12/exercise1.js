// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -> 54321

// function reverse(num) {
//   num = num + '';
//   return num.split('').reverse().join('');
// }
// console.log(Number(reverse(12345)));


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

// function alphabetic(string) {
//   return string.toLowerCase().split('').sort().join('');
// }

// console.log(alphabetic('Webmaster'));


// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// function alphabetizeString(str) {
//   return str.split(' ').sort().join(' ');
// }
// function alphabetizeWords(str) {
//   return str.split(' ').map(function(word) {
//     return word.split('').sort().join('');
//   }).join(' ');
// }

// console.log(alphabetizeWords('Republic Of Serbia'));

// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" -> ['John','Snow' ]

// function stringToArray(string) {
//   return string.split(' ');
// }

// console.log(stringToArray("John Snow"));

// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."

// function convert(fullName) {
//   //prvi korak razbiješ string u niz sa spejsom kao separatorm dario stamenkovic
//   //drugi clan niza skratis na jedan karaktre to je prezime sa tackom substring slice array od 1 = arrayod 1od nula + tacka
//   //vratiti niz ustring
//   return string.slice(0,6) + '.';
// }
// console.log(convert());

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// '0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000

// function addString(string, add, left) {
//   var result = '';
//   for (var i = 0; i < string.length; i++) {
//     if (left) {
//       result += add;
//     }
//     result += string[i];
//     if (!left) {
//       result += add;
//     }
//   }
//   return result;
// }

// console.log(addString('0000', '123', 'l'));











// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;
// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;
// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;
