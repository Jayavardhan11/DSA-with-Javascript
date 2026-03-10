/*
problem statement
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed.
 If the reversed value overflows the 32-bit signed integer range, return 0 

Example:

Input: x = 123
Output: 321
Input: x = -123
Output: -321
*/

const reverseNumber = (n) => {
  let Xcopy = Math.abs(n);
  let rev =0;
  while (Xcopy > 0) {
    let rem = Xcopy % 10;
    rev = rev * 10 + rem;
    Xcopy = Math.floor(Xcopy / 10);
  }
  let limit = 2 ** 31;
  rev = n > 0 ? rev : -rev;
  if (rev < -limit || rev > limit - 1) return 0;

  return rev;
};

let res = reverseNumber(12323);
console.log(res);
