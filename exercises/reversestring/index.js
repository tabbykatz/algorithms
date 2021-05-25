// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //solution 1

    //let ourString = str;
    //let anArray = ourString.split('');
    //let revArray = anArray.reverse();
    //let answer = revArray.join('');
    //return answer;

    //solution 1 (clean)

    //return str.split('').reverse().join('');

    //solution 2

   //let answer = ""
   //for (let i = (str.length - 1); i >= 0; i--) {
   //    answer += str[i];
   // }
   // return answer

   //solution 2 (clean)
   //let reversed = '';

   //for (let character of str) {
       //reversed = character + reversed;
   //}
   //return reversed;

  //solution 3
    return str.split('').reduce((rev, char) => char + rev, '');



}

module.exports = reverse;
