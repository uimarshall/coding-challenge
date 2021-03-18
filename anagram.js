/**
 * 
 A word is said to be an anagram of another when it can be formed by 
 rearranging the letters of the other word using each letter just once. 
 E.g listen is an anagram of silent.
Sanitizing the str first
*************************
First, we convert the entire string to lowercase using the .toLowerCase() method.
Next, we use the .replace() method to search through the string using the specified regular expression pattern and replace every non alphabetical character with an empty string. This leaves us with only letters. No spaces, no symbols!
Next, we call .split() to split the string into an array of characters.
Using the .sort() method, we sort the letters (elements) within the array in alphabetical order.
And finally, we join the now alphabetically ordered array of letters back together to form a string once again.

 */
function anagram(s) {
    s = s.toLowerCase().replace(/[^a-z\d]/g, '').split('').join('');
    let midpoint = Math.floor(s.length / 2);
    let firstHalf = s.substring(0, midpoint);
    let secondHalf = s.substring(midpoint);
    let lettersReplacementCount = 0;
    if (s.length % 2 !== 0) {
        return -1;
    }
    for (let i = 0; i < firstHalf.length; i++) {
        secondHalf.includes(firstHalf[i]) ? 
        secondHalf = secondHalf.replace(firstHalf[i],"") : lettersReplacementCount++;
    }
    return lettersReplacementCount;
}
console.log(anagram('aaabbb'));
console.log(anagram('ab'));
console.log(anagram('abc'));
console.log(anagram('xyyx'));