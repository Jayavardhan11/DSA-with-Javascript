/*
Problem Statement
Problem: Given an integer x, 
return true if x is a palindrome, and false otherwise

E.g., 121 → true, -121 → false, 10 → false

Approach
my approach is try reverse the number and compare to the original number.

Handle negative: if x<0 , return false

store original: XCopy to compare

reverse: initilize rev=0, to get last digit mod it x%10 and to add into it rev because it's divide by 10 so i multiply by 10 to manage, add the remender value (rev*10)+2.


while (x > 0)
  rem = x % 10
  rev = (rev * 10) + rem
  x = x / 10
return rev === xCopy

*/

/*
 *  @param {number } x
 *  @return { boolean }
 */

const checkPalindrome = (x) => {
  let copy = x;

  if (x < 0) return false; // negative numbers cannot be palindrome

  let rev = 0;

  while (x !== 0) {
    let rem = x % 10;        // get last digit
    rev = rev * 10 + rem;    // build reversed number
    x = Math.floor(x / 10);  // remove last digit
  }

  return copy === rev;
};

let res = checkPalindrome(123);
console.log(res);